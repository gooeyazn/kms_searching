// src/helpers/urlFactory.js
const urlFactory = (classValue, locationValue, isLazy) => {
    let query = "메이플 ";

    if (classValue && locationValue) {
        // Both class and location are defined
        query += `${classValue} ${locationValue}`.trim();
    } else if (classValue) {
        // Only class is defined
        query += `${classValue} 사냥터`.trim();
    } else {
        // Default to an empty string
        query += '';
    }

    // Append "뇌빼기" if isLazy is true
    if (isLazy) {
        query += ' 뇌빼기';
    }

    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
};

export default urlFactory;

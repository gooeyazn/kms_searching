// src/helpers/urlFactory.js
const urlFactory = (classValue, mapValue, isLazy) => {
    let query = `${classValue} ${mapValue}`;
    
    // Append "뇌빼기" if isLazy is true
    if (isLazy) {
        query += ' 뇌빼기';
    }

    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

export default urlFactory;

// src/helpers/urlFactory.js
const urlFactory = (classValue, areaValue, mapValue) => {
    const query = `${classValue} ${mapValue}`
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
}

export default urlFactory

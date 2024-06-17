import { classes, maps } from '../constants'

const youtube_base_query = "https://www.youtube.com/results?search_query="

function urlFactory(job, area, map) {
    if (!job || !area || !map) {
        return "Fill out form"
    }
    return youtube_base_query + classes[job] + maps[area][map] || ""
}

export default urlFactory
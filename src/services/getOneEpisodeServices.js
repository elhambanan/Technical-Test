import http from "./httpService";

export function getOneEpisode(episodeId) {
    return http.get(`/episode/${episodeId}`)
}
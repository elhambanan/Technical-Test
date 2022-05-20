import http from "./httpService";

export function getAllEpisodes(pageNum) {
    return http.get(`/episode/${pageNum}`)
}
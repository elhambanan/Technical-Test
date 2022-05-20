import http from "./httpService";

export function getAllCharacters(pageNum) {
    return http.get(`/character/${pageNum}`)
}
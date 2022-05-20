import http from "./httpService";

export function getAllLocation(pageNum) {
    return http.get(`/location/${pageNum}`)
}
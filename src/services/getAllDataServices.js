import http from "./httpService";

export function getAllData() {
    return http.get(`/`)
}
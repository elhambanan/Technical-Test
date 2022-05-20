import http from "./httpService";

export function getOneLocation(locationId) {
    return http.get(`/location/${locationId}`)
}
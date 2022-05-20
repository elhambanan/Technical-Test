import http from "./httpService";

export function getOneCharacter(characterId) {
    return http.get(`/character/${characterId}`)
}
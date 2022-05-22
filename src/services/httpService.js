import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/comments";



axios.interceptors.request.use(
    (request) => {
        // Edit request ...
        return request;
    }, 
    (error)=>{
        return Promise.reject();
    })

axios.interceptors.response.use(
    (response) => {
        // Edit response ...
        return response;
    }, 
    (error)=>{
        return Promise.reject();
    })

const http = {
    get : axios.get,
    put: axios.put,
    delete : axios.delete,
    post : axios.post, 
}
export default http;
import axios from 'axios';

const omdb = axios.create({
    baseURL: "https://www.omdbapi.com/",
    timeout: 2000,
    params:{
        apikey: "e289c929"
    }
})
export {omdb};
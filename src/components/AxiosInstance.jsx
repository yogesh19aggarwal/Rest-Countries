import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL : 'https://restcountries.com/v3.1/',
    timeout: 5000,
    headers: {
        'Content-type': 'application/json',
        accept : 'application/json'
    }
})
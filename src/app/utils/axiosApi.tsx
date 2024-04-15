import axios from "axios";

export const api = axios.create({
    baseURL: process.env.BASE_URL_API,
    timeout: 1000,
});

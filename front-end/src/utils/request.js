import axios from 'axios';

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return error;
})

service.interceptors.response.use((data) => {
    return data.data;
}, (error) => {
    return error;
})

export default service;
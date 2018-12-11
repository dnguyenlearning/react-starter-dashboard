import axios from "axios"

const instance = axios.create({
    baseURL: 'http://192.168.1.55'
});

export default instance;
import client from "client";
import {defaultHelper} from "utils/header.helper";

const userApiUrl = {
    register: '/api/user/register',
    login: '/api/login_check'
};

const registerUser = async ({data}) => {
    try {
        let response = await client.post(userApiUrl.register, JSON.stringify(data), defaultHelper());
        return response.data;
    }catch (err){
        return {err};
    }
};

const loginUser = async ({data}) => {
    try {
        let response = await client.post(userApiUrl.login, JSON.stringify(data), defaultHelper());
        console.log('response', response)
        return response;
    }catch (err){
        return {err};
    }
};


export { registerUser, loginUser }
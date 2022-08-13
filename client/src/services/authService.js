import * as request from './request.js';
import { setUserData } from './userData.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export const login = async(email, password) => {
    const user = await request.post(endpoints.login, { email, password });
    setUserData(user);

    return user;
}

export const register = async(email, password) => {
    const user = await request.post(endpoints.register, { email, password });
    setUserData(user);

    return user;
}

export const logout = async() => {
     await request.get(endpoints.logout);
}
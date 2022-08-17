import * as request from './requester';

const baseUrl ='https://softuni-custom-server-test.herokuapp.com/users';

export const register = async (data) => {
    const response = await request.post(`${baseUrl}/register`, data );
    return response;
}

export const login = async (data) => {
    const response  = await request.post(`${baseUrl}/login`, data);
    return response
}

export const logout = async () => {
    const response = await request.get(`${baseUrl}/logout`);
    return response;
}
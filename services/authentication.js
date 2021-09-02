import api from './api';

export const signIn = async(data) => {
    console.log('in sign in')
    const response = await api.post('/authentication/sign-in', data);
    console.log(response)
    const body = response.data;
    const user = body.user;
    return user;
};

export const signUp = async(data) => {
    
    console.log('in api sign up', data)
    const response = await api.post('/authentication/sign-up', data);
    const body = response.data;
    const user = body.user;
    return user;
};

export const signOut = async() => {
    await api.post('/authentication/sign-out');
};

export const verify = async() => {
    const response = await api.get('/authentication/verify');
    return response.data.user;
};
import api from "./axios";

export const getSignUps = () => {
    return api.get('/signups')
};

export const getSignUp = (id:string | undefined) => {
    return api.get(`/signups/${id}`)
};

export const createSignUp = (data: any) => {
    return api.post('/signups', data)
};

export const deleteSignUp = (id: number | string) => {
    return api.delete(`/signups/${id}`)
};
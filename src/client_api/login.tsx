import api from "./axios";

export const getLogins = () => {
    return api.get('/logins')
};

export const getLogin = (id:string | undefined) => {
    return api.get(`/logins/${id}`)
};

export const createLogin = (data: any) => {
    return api.post('/logins', data)
};

export const deleteLogin = (id: number | string) => {
    return api.delete(`/logins/${id}`)
};
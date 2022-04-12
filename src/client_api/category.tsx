import api from "./axios";

export const getCategorys = () => {
    return api.get('/cates')
};

export const getCategory = (id: string | undefined) => {
    return api.get(`/cates/${id}`)
};

export const  createCategory = (data: any) => {
    return api.post(`/cates, data`)
};

export const deleteCategory = (id: number |string) => {
    return api.delete(`/cates/${id}`)
};


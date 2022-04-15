import api from "./axios";

export const getAll = () => {
    return api.get('/categories')
};

export const getCategory = (id: string | undefined) => {
    return api.get(`/categories/${id}`)
};
export const createCategory = (data: any) => {
    return api.post('/categories', data)
};

export const update = (cate: any) => {
    const url = `/categories/${cate.id}`
    return api.patch(url, cate)
};

export const deleteCategory = (id: number |string) => {
    return api.delete(`/categories/${id}`)
};



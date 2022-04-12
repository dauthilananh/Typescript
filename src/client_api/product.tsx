import api from "./axios";

export const getProducts = () => {
    return api.get('/phones')
};

export const getProduct = (id:string | undefined) => {
    return api.get(`/phones/${id}`)
};

export const createProduct = (data: any) => {
    return api.post('/phones', data)
};
export const update = (product: any) => {
    const url = `/phones/${product.id}`
    return api.patch(url, product)
  }

export const deleteProduct = (id: number | string | undefined) => {
    return api.delete(`/phones/${id}`)
};
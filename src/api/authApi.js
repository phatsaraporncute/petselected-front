import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:8888'
})

// let token = localStorage.getItem("token");

const addToken = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const register = (input) => {
    return authApi.post('/auth/register', input)
}

export const login = (input) => {
    return authApi.post('/auth/login', input)
}

export const getMe = (token) => {
    return authApi.get('/auth/getme', addToken(token))
}

export const addProduct = (input, token) => {
    return authApi.post('/admin/product/addproduct', input, addToken(token))
}

export const getAllProduct = (token) => {
    return authApi.get('/guest/', addToken(token))
}

export const getProductById = (id) => {
    return authApi.get(`/guest/${id}`)
}


export const deleteProduct = (id, token) => {
    return authApi.delete(`/admin/product/${id}`, addToken(token))
}


export const updateProduct = (id, input, token) => {
    return authApi.put(`/admin/product/${id}`, input, addToken(token))
}

export const addImage = (productId, input, token) => {
    return authApi.patch(`/admin/product/image/${productId}`, input, addToken(token))
}

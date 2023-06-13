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
    return authApi.get('/admin/product/', addToken(token))
}



import axios from 'axios'

const authApi = axios.create({
    baseURL: 'http://localhost:8888'
})

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
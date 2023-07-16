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

export const addCart = (input, token) => {
    return authApi.post("/cart/createcart", input, addToken(token));
};
export const getCart = (token, id) => {
    return authApi.get(`/cart/${id}`, addToken(token));
};

export const updateCart = (input, token) => {
    return authApi.put(`/cart/updatecart/`, input, addToken(token));
};

export const updateCart1 = (id, input, token) => {
    return authApi.put(`/cart/updatecart1/${id}`, input, addToken(token));
};

export const createOrder = (input, token) => {
    return authApi.post("/order/createorder", input, addToken(token));
};

export const deleteCart = (token) => {
    return authApi.delete("/cart/deletecart", addToken(token))
}

export const deleteCartById = (id, token) => {
    return authApi.delete(`/cart/deletecart/${id}`, addToken(token))
}

export const getOrderById = (id, token) => {
    return authApi.get(`/order/${id}`, addToken(token));
};

export const updateOrder = (id, input, token) => {
    return authApi.patch(`/order/updateorder/${id}`, input, addToken(token));
};

export const uploadSlip = (formData, token) => authApi.put('/order/uploadslip', formData, addToken(token))
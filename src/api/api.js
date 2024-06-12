import axios from "axios";

const baseAppURL = 'http://127.0.0.1:8000/api/v1/'

export const userAPI = {
    regUser(data) {
        return axios.post(`${baseAppURL}auth/users/`, {
            'first_name': data.first_name,
            'username': data.username,
            'email': data.email,
            'password': data.password,
            'address': data.address,
            'consentReceiveNews': data.consentPersonalData,
            'consentPersonalData': data.consentPersonalData,
        }, {})
    },

    authUser(data) {
        return axios.post('http://127.0.0.1:8000/auth/token/login/', {
            'username': data.username,
            'password': data.password,
        }, {})
    },

    aboutUser(auth_token) {

        return axios.get(`${baseAppURL}auth/users/me/`, {
            headers: {
                'Authorization': `Token ${auth_token}`
            }
        })
    },

    changeUserInfo(auth_token, data) {

        axios.patch(`${baseAppURL}auth/users/me/`, data, {
            headers: {
                Authorization: `Token ${auth_token.value}`,
            },
        })
    },
    logoutUser(auth_token) {

        return axios.post('http://127.0.0.1:8000/auth/token/logout/', {}, {
            headers: {
                'Authorization': `Token ${auth_token.value}`
            }
        })
    }
}
export const productsAPI = {
    getProducts() {
        return axios.get(`${baseAppURL}products-app/products/`)
    },
    getProduct(product_id) {
        return axios.get(`${baseAppURL}products-app/product/${product_id}/`)
    },
    getProductImages(product_id) {
        return axios.get(`${baseAppURL}products-app/images/${product_id}/`)
    }
}


export const cartAPI = {
    getCarts(userToken) {
        return axios.get(`${baseAppURL}products-app/cart/`, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    },
    addNewCart(userToken, product_id) {
        return axios.post(`${baseAppURL}products-app/cart/`, {
            product_id: product_id,
        }, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    },
    deleteCart(userToken, cart_id) {
        return axios.delete(`${baseAppURL}products-app/cart/${cart_id}/`, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    },
    changeCartItemQuantity(userToken, cart_id, quantity) {
        return axios.patch(`${baseAppURL}products-app/cart/${cart_id}/`, {
            quantity: quantity,
        }, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    },
    deleteAllCarts(userToken) {
        return axios.delete(`${baseAppURL}products-app/cart/delete-all-carts/`, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    }
}

export const orderAPI = {
    makeAnOrder(userToken, order) {

        return axios.post(`${baseAppURL}products-app/order/`, {
            order: order
        }, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    },

    getOrders(userToken) {
        return axios.get(`${baseAppURL}products-app/order/`, {
            headers: {
                'Authorization': `Token ${userToken}`
            }
        })
    }
}




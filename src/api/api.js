import axios from "axios";


export const userAPI = {
    regUser(data) {
        debugger;
        return axios.post('http://127.0.0.1:8000/api/v1/auth/users/', {
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
        return axios.get('http://127.0.0.1:8000/api/v1/auth/users/me/', {
            headers: {
                'Authorization': `Token ${auth_token}`
            }
        })
    },

    changeUserInfo(auth_token, data){
        axios.patch("http://127.0.0.1:8000/api/v1/auth/users/me/", data, {
            headers: {
                Authorization: `Token ${auth_token}`,
            },
        })
    },
    logoutUser(auth_token){
        axios.post('http://127.0.0.1:8000/auth/token/logout/', {}, {
                headers: {
                    'Authorization': `Token ${auth_token}`
                }
            })
    }
}

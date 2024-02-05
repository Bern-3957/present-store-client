import {cartAPI, productsAPI, userAPI} from "../../api/api";
import {
    setCartsAC,
    setCartsProductsAC, setIsAuthenticatedAC,
    setProductsAC, setUserInfoAC,
    setUserTokenAC
} from "../actions/actionCreators";
import {setToken} from "../../customProvider/tokenProvider";

export const getProductsTC = () => {
    return (dispatch) => {
        productsAPI.getProducts().then(response => {
            console.log(response.data.products)
            dispatch(setProductsAC(response.data.products))
        })
    };
}

// export const authUserTC = (dataForAuth) => (dispatch) => {
//     userAPI.authUser(dataForAuth).then(response => {
//         dispatch(setUserTokenAC(response.data.auth_token))
//         return userAPI.aboutUser(response.data.auth_token).then(userInfo => {
//             dispatch(setIsUserAuthAC(true))
//             dispatch(setUserInfoAC(userInfo.data))
//         }).catch(error => {
//             console.error('Error fetching user info:', error);
//         });
//     }).catch(error => {
//         console.error('Error login:', error);
//     })
//
// }
export const authUserTC = (dataForAuth) => (dispatch) => {

    return userAPI.authUser(dataForAuth)
        .then(response => {
            dispatch(setUserTokenAC(response.data.auth_token));
            setToken(response.data.auth_token)
            return userAPI.aboutUser(response.data.auth_token)
        })
        .then(userInfo => {
            dispatch(setIsAuthenticatedAC(true));
            dispatch(setUserInfoAC(userInfo.data));

        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        })
        .finally(()=> {
            console.log('finally')
        })

}

export const getCartsTC = (userToken) => (dispatch) => {
    cartAPI.getCarts(userToken).then(response=>{
        console.log(response.data.carts)
        console.log(response.data.carts_products)
        dispatch(setCartsAC(response.data.carts))
        dispatch(setCartsProductsAC(response.data.carts_products))
    })
}

export const deleteCartTC = (userToken, cart_id) => (dispatch) => {
    cartAPI.deleteCart(userToken, cart_id).then(response=>{
        console.log(response)
    })
}
export const addNewCartTC = (userToken, product_id) => (dispatch) => {
    cartAPI.addNewCart(userToken, product_id).then(response=>{
        console.log(response)
    })
}
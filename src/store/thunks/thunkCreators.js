import {cartAPI, productsAPI} from "../../api/api";
import {setCartsAC, setCartsProductsAC, setProductsAC} from "../actions/actionCreators";

export const getProductsTC = () => {
    return (dispatch) => {
        productsAPI.getProducts().then(response => {
            console.log(response.data.products)
            dispatch(setProductsAC(response.data.products))
        })
    };
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
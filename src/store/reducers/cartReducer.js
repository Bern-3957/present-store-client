import {
    DELETE_PRODUCT_FROM_CART,
    SET_CARTS, SET_CARTS_PRODUCTS
} from "../actions/actionTypes";

let InitialState = {
    carts: [],
    cartsProducts: []
};

export const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CARTS:
            return {
                ...state,
                carts: action.carts
            }

        case SET_CARTS_PRODUCTS:
            return {
                ...state,
                cartsProducts: action.cartsProducts
            }
        case DELETE_PRODUCT_FROM_CART:
            debugger
            const new_state = {
                ...state,
                carts: state.carts.filter(c => {
                    debugger
                    return c.product !== action.carts_product_id
                }),
                cartsProducts: state.cartsProducts.filter(cp => {
                    debugger
                    return cp.id !== action.carts_product_id
                })
            }
            return new_state

        default:
            return state
    }
}



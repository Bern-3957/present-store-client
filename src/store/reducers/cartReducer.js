import {
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

        default:
            return state
    }
}



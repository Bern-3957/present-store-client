import {
    CHANGE_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY,
    DELETE_CART_ITEM, INCREMENT_CART_ITEM_QUANTITY,
    SET_CART_ITEMS, SET_COST, SET_DISCOUNT,
} from "../actions/actionTypes";

let InitialState = {
    cartItems: [],
    money: {
        productsCost: 0,
        discount: 0,
        deliveryCost: 250,
        finalCost: 0,
    }
};

export const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems
            }

        case DELETE_CART_ITEM:
            const newState = {
                ...state,
                cartItems: state.cartItems.filter(c => {

                    return c.id !== action.cartItemId
                }),

            }
            return newState

        case CHANGE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) => {
                    if (action.cartItemId === cartItem.id) {
                        return {
                            ...cartItem,
                            quantity: action.quantity
                        };
                    } else {
                        return cartItem;
                    }
                })
            };

        case SET_COST:
            const productsCost = state.cartItems.reduce((total, item) => {
                return total + (item.quantity !== 0 ? item.product_details.price * item.quantity : 0);
            }, 0);

            const finalCost = productsCost - state.money.discount + state.money.deliveryCost;

            return {
                ...state,
                money: {
                    ...state.money,
                    productsCost: productsCost,
                    finalCost: Math.max(finalCost, 0)
                }
            };
        case SET_DISCOUNT:{
            return {
                ...state,
                money: {
                    ...state.money,
                    discount: action.discount
                }
            }
        }
        default:
            return state
    }
}



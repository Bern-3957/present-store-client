import {cartAPI, orderAPI, productsAPI, userAPI} from "../../api/api";
import {
    changeCartItemQuantityAC, decrementCartItemQuantityAC, incrementCartItemQuantityAC, logoutUserAC, openModalAC,
    setCartItemsAC, setCostAC, setCurrentProductAC, setCurrentProductImagesAC, setDiscountAC,
    setIsAuthenticatedAC,
    setProductsAC, setUserInfoAC,
    setUserTokenAC
} from "../actions/actionCreators";
import {getToken, removeToken, setToken} from "../../customProvider/tokenProvider";
import {useSelector} from "react-redux";

export const getProductsTC = () => {
    return (dispatch) => {
        productsAPI.getProducts().then(response => {
            dispatch(setProductsAC(response.data.products))
        })
    };
}

export const getProductTC = (product_id) => {
    return (dispatch) => {
        productsAPI.getProduct(product_id).then(response => {
            dispatch(setCurrentProductAC(response.data))
        })
    }
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
            dispatch(getCartsTC(getToken().value))
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        })
        .finally(() => {
            console.log('finally')
        })

}

export const logoutUserTC = (userToken) => (dispatch) => {

    userAPI.logoutUser(userToken).then(response => {
        dispatch(setIsAuthenticatedAC(false))
        dispatch(setCartItemsAC([]))
        dispatch(logoutUserAC())

        removeToken()
    })

}


export const getCartsTC = (userToken) => (dispatch) => {
    cartAPI.getCarts(userToken).then(response => {
        dispatch(setCartItemsAC(response.data.cart_items))
        dispatch(setCostAC())
    })
}

export const deleteCartTC = (userToken, cart_id) => (dispatch) => {
    cartAPI.deleteCart(userToken, cart_id).then(response => {
        console.log('------------++++++++++++++++++',response)
        dispatch(setCostAC())
    })
}

export const addNewCartTC = (userToken, product_id) => (dispatch, getState) => {
    dispatch(getCartsTC(userToken))

    const cartItems = getState().cart.cartItems;
    const existingCartItem = cartItems.some(cartItem => {
        return cartItem.product_details.id === product_id;
    });

    if (existingCartItem) {
        alert('Этот товар уже в корзине')
        return
    }

    cartAPI.addNewCart(userToken, product_id).then(response => {
        dispatch(getCartsTC(userToken))
    })

}

// export const getCartsTC = (userToken) => async (dispatch) => {
//     try {
//         const response = await cartAPI.getCarts(userToken);
//         debugger
//         debugger;
//         // console.log(response.data.carts);
//         // console.log(response.data.carts_products);
//         dispatch(setCartItemsAC(response.data.cart_items));
//         // dispatch(setCartsProductsAC(response.data.carts_products));
//     } catch (error) {
//         console.error('Ошибка при получении корзины:', error);
//     }
// };


// export const deleteCartTC = (userToken, cart_id) => async (dispatch) => {
//     try {
//         const response = await cartAPI.deleteCart(userToken, cart_id);
//         console.log(response);
//     } catch (error) {
//         console.error('Ошибка при удалении товара из корзины:', error);
//     }
// };

// export const addNewCartTC = (userToken, product_id) => async (dispatch, getState) => {
//     try {
//         debugger
//         await dispatch(getCartsTC(userToken));
//         const cartItems = getState().cart.cartItems;
//         console.log('cartItems: ', cartItems);
//
//         const existingCartItem = cartItems.find(cartItem => cartItem.product_details.product_id === product_id);
//
//         if (existingCartItem) {
//             alert('Этот товар уже в корзине');
//             return;
//         }
//
//         const response = await cartAPI.addNewCart(userToken, product_id);
//         console.log(response);
//     } catch (error) {
//         console.error('Ошибка при добавлении нового товара в корзину:', error);
//     }
// };


export const incrementCartItemQuantityTC = (userToken, cart_id) => (dispatch, getState) => {
    debugger
    const cartItems = getState().cart.cartItems;
    const quantity = cartItems.find(cartItem => cartItem.id === cart_id).quantity;

    cartAPI.changeCartItemQuantity(userToken, cart_id, quantity + 1).then(response => {
        dispatch(changeCartItemQuantityAC(cart_id, quantity + 1))
        dispatch(setCostAC())
    })
}

export const decrementCartItemQuantityTC = (userToken, cart_id) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const quantity = cartItems.find(cartItem => cartItem.id === cart_id).quantity;
    if (quantity >= 2)
        cartAPI.changeCartItemQuantity(userToken, cart_id, quantity - 1).then(response => {
            dispatch(changeCartItemQuantityAC(cart_id, quantity - 1))
            dispatch(setCostAC())
        }).catch((error) => {
                alert(error.response.status)
                dispatch(changeCartItemQuantityAC(cart_id, 1))

            }
        )
    else {
        dispatch(changeCartItemQuantityAC(cart_id, 1))
    }
}

export const makeAnOrderTC = (userToken, orderItems, orderInfo, cartMoney) => async (dispatch, getState) => {
    const order = {orderItems, orderInfo, cartMoney}
    const response = await orderAPI.makeAnOrder(userToken, order)
    console.log('response------------:::', response)
    debugger
    if (response.status === 201) {
        const resp = await cartAPI.deleteAllCarts(userToken)
        dispatch(setCartItemsAC([]))
        dispatch(setCostAC())
        dispatch(openModalAC("order-success-modal"))

    } else {
        alert("status", response.status)
    }

}
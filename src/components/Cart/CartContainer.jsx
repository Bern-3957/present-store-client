import React, {useCallback, useEffect} from "react";
import Cart from "./Cart";
import {useDispatch, useSelector} from "react-redux";
import {
    decrementCartItemQuantityTC,
    deleteCartTC,
    getCartsTC,
    incrementCartItemQuantityTC, makeAnOrderTC
} from "../../store/thunks/thunkCreators";
import {getToken} from "../../customProvider/tokenProvider";
import {deleteCartItemAC, deleteProductFromCartAC, setCostAC, setDiscountAC} from "../../store/actions/actionCreators";



const CartContainer = (props) => {
    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart.cartItems)
    const cartsProducts = useSelector((state) => state.cart.cartsProducts)
    const cartMoney = useSelector(state => state.cart.money)
    const userToken = getToken()

    useEffect(() => {
        dispatch(getCartsTC(userToken.value))

    }, [userToken.value]);


    const deleteCartItem = async (cartItemId) => {
        try {
            await dispatch(deleteCartTC(userToken.value, cartItemId))
            // После успешного удаления, повторно получаем корзины
            dispatch(deleteCartItemAC(cartItemId))
            // await dispatch(getCartsTC(userToken.value))
        } catch (error) {
            console.error('Ошибка при удалении корзины:', error)
        }
    }

    const incrementCartQuantity = (cart_id) => {
        // set_cart_quantity(cart_quantity+1)
        dispatch(incrementCartItemQuantityTC(userToken.value, cart_id))
        console.log('loggggggggggggggggg')

    }

    const sendOrderDataToServer = (orderInfo) => {
        const orderItems = carts.map((item)=> (
            {product_id: item.product_details.id, quantity: item.quantity}
        ))

        dispatch(makeAnOrderTC(userToken.value, orderItems, orderInfo, cartMoney))
    }

    const decrementCartQuantity = (cart_id) => {
        // if (cart_quantity >= 2) {
        //     set_cart_quantity(cart_quantity - 1)
        // } else {
        //     set_cart_quantity(1)
        // }
        dispatch(decrementCartItemQuantityTC(userToken.value, cart_id))
        console.log('loggggggggggggggggg')
    }

    return <Cart incrementCartQuantity={incrementCartQuantity}
                 decrementCartQuantity={decrementCartQuantity}
                 userToken={userToken}
                 carts={carts}
                 cartMoney={cartMoney}
                 sendOrderDataToServer={sendOrderDataToServer}
                 cartsProducts={cartsProducts} deleteCartItem={deleteCartItem}/>

}


export default CartContainer


// const CartContainer = (props) => {
//     const dispatch = useDispatch();
//     const carts = useSelector((state) => state.cart.carts);
//     const cartsProducts = useSelector((state) => state.cart.cartsProducts);
//     const userToken = getToken();
//
//     const getCartsCallback = useCallback(() => {
//         dispatch(getCartsTC(userToken.value));
//     }, [dispatch, userToken.value]);
//
//     useEffect(() => {
//         getCartsCallback();
//     }, [getCartsCallback]);
//
//     const deleteCart = async (cart_id) => {
//         try {
//             await dispatch(deleteCartTC(userToken.value, cart_id));
//             // После успешного удаления, повторно получаем корзины
//             getCartsCallback();
//         } catch (error) {
//             console.error('Ошибка при удалении корзины:', error);
//         }
//     };
//
//     return <Cart carts={carts} cartsProducts={cartsProducts} deleteCart={deleteCart} />;
// };
//
// export default CartContainer;

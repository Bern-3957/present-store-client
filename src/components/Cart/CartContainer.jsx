import React, {useCallback, useEffect} from "react";
import Cart from "./Cart";
import {useDispatch, useSelector} from "react-redux";
import {deleteCartTC, getCartsTC} from "../../store/thunks/thunkCreators";
import {getToken} from "../../customProvider/tokenProvider";
import {deleteProductFromCartAC} from "../../store/actions/actionCreators";


const CartContainer = (props) => {
    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart.carts)
    const cartsProducts = useSelector((state) => state.cart.cartsProducts)
    const userToken = getToken()

    useEffect(() => {
        dispatch(getCartsTC(userToken.value))
    }, [userToken.value]);


    const deleteCart = async (cart_id, carts_product_id) => {
        debugger
        try {
            await dispatch(deleteCartTC(userToken.value, cart_id))
            // После успешного удаления, повторно получаем корзины
            dispatch(deleteProductFromCartAC(carts_product_id))
            // await dispatch(getCartsTC(userToken.value))
        } catch (error) {
            console.error('Ошибка при удалении корзины:', error)
        }
    }

    return <Cart carts={carts} cartsProducts={cartsProducts} deleteCart={deleteCart}/>

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

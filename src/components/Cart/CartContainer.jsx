import React, {useEffect} from "react";
import Cart from "./Cart";
import {useDispatch, useSelector} from "react-redux";
import {deleteCartTC, getCartsTC} from "../../store/thunks/thunkCreators";


const CartContainer = (props) => {

    const dispatch = useDispatch()
    const carts = useSelector((state) => state.cart.carts)
    const cartsProducts = useSelector((state) => state.cart.cartsProducts)
    const userToken = useSelector(state => state.user.userToken)


    useEffect(() => {
        dispatch(getCartsTC(userToken))
    }, [carts]);

    const deleteCart = async (cart_id) => {
        try {
            await dispatch(deleteCartTC(userToken, cart_id))
            // После успешного удаления, повторно получаем корзины
            await dispatch(getCartsTC(userToken))
        } catch (error) {
            console.error('Ошибка при удалении корзины:', error)
        }
    }

    return <Cart carts={carts} cartsProducts={cartsProducts} deleteCart={deleteCart}/>

}


export default CartContainer
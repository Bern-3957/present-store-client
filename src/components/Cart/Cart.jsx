import React from "react";
import s from "./Cart.module.css"
import CartList from "./CartList";
import CartForm from "./CartForm";


const Cart = (props) => {
    return <div className={s.cart}>
        <div className="container">
            <h2 className={s.title}>Корзина</h2>
            <div className={s.cart_inner}>
                <CartList carts={props.carts} cartsProducts={props.cartsProducts} deleteCart={props.deleteCart}></CartList>
                <CartForm></CartForm>
            </div>
        </div>
    </div>
}


export default Cart
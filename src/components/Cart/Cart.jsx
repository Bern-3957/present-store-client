import React from "react";
import s from "./Cart.module.css"
import CartList from "./CartList";
import CartForm from "./CartForm";


const Cart = (props) => {
    debugger
    return <div className={s.cart}>
        <div className="container">
            <h2 className={s.title}>Корзина</h2>
            <div className={s.cart_inner}>
                <CartList userToken={props.userToken}
                          carts={props.carts}
                          decrementCartQuantity={props.decrementCartQuantity}
                          incrementCartQuantity={props.incrementCartQuantity}
                          cartsProducts={props.cartsProducts}
                          deleteCartItem={props.deleteCartItem}></CartList>
                <CartForm sendOrderDataToServer={props.sendOrderDataToServer}
                          cartMoney={props.cartMoney}/>
            </div>
        </div>
    </div>
}


export default Cart
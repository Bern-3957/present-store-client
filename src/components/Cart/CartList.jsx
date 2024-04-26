import React, {useState} from "react";
import s from "./Cart.module.css"
import plus from "../../assets/icons/products/plus.svg";
import minus from "../../assets/icons/products/minus.svg";
import base_img from "../../assets/images/cart/Rectangle 21.png";

const CartList = (props) => {


    console.log("RENDER");
    return <div className={s.cart_list}>
        {props.carts.length !== 0 ?
                props.carts.map((cartsItem) => {

                    // const cartsProductsItem = props.cartsProducts.find((item) => item.id === cartsItem.product);
                    // if (cartsProductsItem) {

                    return <div key={cartsItem.product_details.id} className={s.cart_item}>
                        <div className={s.cart_item_inner}>
                            <img src={`http://127.0.0.1:8000${cartsItem.product_details.images[0].image}`} className={s.cart_item_img} alt="cart_item_img"/>
                            <div className={s.cart_item_info}>
                                <div className={s.cart_item_title}>{cartsItem.product_details.title}</div>
                                <div className={s.art}>арт. {cartsItem.product_details.vendor_code}</div>
                                <div className={s.quantity}>
                                    <span onClick={()=>props.incrementCartQuantity(cartsItem.id)} className={s.quantity_add_btn}><img src={plus} alt="1"/></span>
                                    <div className={s.quantity_count}>{cartsItem.quantity}</div>
                                    <span onClick={()=>props.decrementCartQuantity(cartsItem.id)} className={s.quantity_subtract_btn}><img src={minus} alt="0"/></span>
                                </div>
                                <div className={s.price}>{cartsItem.product_details.price} ₽</div>
                            </div>
                            <button onClick={() => props.deleteCartItem(cartsItem.id)}
                                    className={s.delete_from_cart_btn}>Убрать из корзины
                            </button>
                        </div>
                    </div>
                    // }
                })
            : <div className={s.cartEmpty}>Тут пустота</div>}

    </div>
}


export default CartList
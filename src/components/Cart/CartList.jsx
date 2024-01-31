import React from "react";
import s from "./Cart.module.css"
import plus from "../../assets/icons/products/plus.svg";
import minus from "../../assets/icons/products/minus.svg";
import base_img from "../../assets/images/cart/Rectangle 21.png";


const CartList = (props) => {
    console.log("RENDER");
    return <div className={s.cart_list}>
        {props.carts.length !== 0 ?
                props.carts.map((cartsItem) => {
                    const cartsProductsItem = props.cartsProducts.find((item) => item.id === cartsItem.product);
                    if (cartsProductsItem) {
                        return <div key={cartsProductsItem.id} className={s.cart_item}>
                            <div className={s.cart_item_inner}>
                                <img src={base_img} className={s.cart_item_img} alt="cart_item_img"/>
                                <div className={s.cart_item_info}>
                                    <div className={s.cart_item_title}>{cartsProductsItem.title}</div>
                                    <div className={s.art}>арт. {cartsProductsItem.vendor_code}</div>
                                    <div className={s.quantity}>
                                        <span className={s.quantity_add_btn}><img src={plus} alt="1"/></span>
                                        <div className={s.quantity_count}>1</div>
                                        <span className={s.quantity_subtract_btn}><img src={minus} alt="0"/></span>
                                    </div>
                                    <div className={s.price}>{cartsProductsItem.price} ₽</div>
                                </div>
                                <button onClick={() => props.deleteCart(cartsItem.id)}
                                        className={s.delete_from_cart_btn}>Убрать из корзины
                                </button>
                            </div>
                        </div>
                    }
                })
            : <div className={s.cartEmpty}>Тут пустота</div>}

    </div>
}


export default CartList
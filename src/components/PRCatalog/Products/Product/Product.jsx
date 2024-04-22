import React, {useState} from "react";
import s from "./Product.module.css"
import plus from "./../../../../assets/icons/products/plus.svg"
import minus from "./../../../../assets/icons/products/minus.svg"
import present from "./present.png"
import products from "../Products";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../utils/routes";

const Product = (props) => {
    // const products = props.filteredProducts.length !== 0 ? props.filteredProducts : props.products
    return (props.products.map((item) => {

            return <div className={s.product_item}>
                <Link to={`${ROUTES.ABOUT_PRODUCT}${item.id}/${item.title}/`} onClick={()=>props.getProduct(item.id)}><img className={s.img} src={`http://127.0.0.1:8000${item.images[0].image}`} alt="present_img"/></Link>
                <div className={s.info}>
                <div className={s.art}>арт. {item.vendor_code}</div>
                    <Link title={item.title} className={s.title} to={ROUTES.ABOUT_PRODUCT}>{item.title}></Link>
                    <div className={s.price}>{item.price} ₽</div>
                    <div className={s.quantity}>
                        <span onClick={() => props.increment(item.id)} className={s.quantity_add_btn}><img src={plus} alt="1"/></span>
                        <div className={s.quantity_count}>{item.count}</div>
                        <span onClick={() => props.decrement(item.id)} className={s.quantity_subtract_btn}><img src={minus} alt="0"/></span>
                    </div>
                    {props.cart_items.find((cart_item) => cart_item.product_details.id === item.id) ?
                        // <button disabled={true} onClick={() => {
                        //         props.isAuthenticated ?
                        //             props.addNewCart(item.id) :
                        //             props.openModal('auth-modal')
                        // }
                        // } className={s.add_to_basket_btn_product_in_cart}>В корзине Перейти
                        // </button>
                        <Link
                         className={s.add_to_basket_btn_product_in_cart} to={ROUTES.CART}>В корзине Перейти
                        </Link>
                        :
                        <button onClick={() => {
                            props.isAuthenticated ?
                                props.addNewCart(item.id) :
                                props.openModal('auth-modal')
                        }} className={s.add_to_basket_btn}>В корзину</button>
                    }

                </div>
            </div>
        })
    )
}

export default Product
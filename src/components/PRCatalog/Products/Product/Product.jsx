import React, {useState} from "react";
import s from "./Product.module.css"
import plus from "./../../../../assets/icons/products/plus.svg"
import minus from "./../../../../assets/icons/products/minus.svg"
import present from "./present.png"
import products from "../Products";

const Product = (props) => {
    debugger
    // const products = props.filteredProducts.length !== 0 ? props.filteredProducts : props.products
    return (props.products.map((item) => {
            return <div className={s.product_item}>
                <img className={s.img} src={present} alt="present_img"/>
                <div className={s.info}>
                    <div className={s.art}>арт. {item.vendor_code}</div>
                    <div title={item.title} className={s.title}>{item.title} </div>
                    <div className={s.price}>{item.price} ₽</div>
                    <div className={s.quantity}>
                        <span onClick={() => props.increment(item.id)} className={s.quantity_add_btn}><img src={plus} alt="1"/></span>
                        <div className={s.quantity_count}>{item.count}</div>
                        <span onClick={() => props.decrement(item.id)} className={s.quantity_subtract_btn}><img src={minus} alt="0"/></span>
                    </div>
                    <button onClick={()=> {
                        {
                            props.isAuthenticated ?
                                props.addNewCart(item.id) :
                                    props.openModal('auth-modal')
                        }
                    }
                    } className={s.add_to_basket_btn}>В корзину</button>
                </div>
            </div>
        })
    )
}

export default Product
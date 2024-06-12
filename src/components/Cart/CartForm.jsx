import React, {useState} from "react";
import s from "./Cart.module.css"
import {useForm, useWatch} from "react-hook-form";

const receiveMethod = [
    {id: 1, name: "delivery_by_courier_in_Moscow"},
    {id: 2, name: "delivery_by_sdek"},
    {id: 3, name: "pickup"},
]


const deliveryAddressMethods = [
    {id: 1, name: "on_address"},
    {id: 2, name: "on_metro"},
]


const CartForm = (props) => {
    debugger
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        reset,
        watch
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        console.log('Нажатие на ')
        // alert(JSON.stringify(data))
        props.sendOrderDataToServer(data)
        reset()
    }
    const orderReceiveMethod = watch("order_receive_method", "courier");

    return <form onSubmit={handleSubmit(onSubmit)} className={s.cart_form}>
        <div className={s.cart_form_title}>Оформление заказа</div>
        <div className={s.cart_form_inner}>
            <div className={s.cart_form_item}>
                <div className={s.cart_form_item_title}>
                    Контактные данные
                </div>
                <input {...register('name', {required: true})} className={s.contact_input} type="text"
                       placeholder='Имя'/>
                <input {...register('phone_number', {required: true})} className={s.contact_input} type="text"
                       placeholder='Номер телефона'/>
            </div>
            <div className={s.cart_form_item}>
                <div className={s.cart_form_item_title}>
                    Способ получения
                </div>
                <div className={s.receive_radio_inner}>
                    <div className={s.receive_radio}><input defaultChecked {...register('order_receive_method')} value={"courier"}
                                                             style={{width: "24px"}} id="receive1" type="radio"/><label
                        htmlFor="receive1">Доставка
                        курьером по Москве</label>
                    </div>
                    <div className={s.receive_radio}><input {...register('order_receive_method')} value={"sdek"}
                                                            style={{width: "24px"}} id="receive2" type="radio"/><label
                        htmlFor="receive2">Доставка
                        СДЭК</label>
                    </div>
                    <div className={s.receive_radio}><input {...register('order_receive_method')} value={"pickup"}
                                                            style={{width: "24px"}} id="receive3" type="radio"/><label
                        htmlFor="receive3">Самовывоз</label>
                    </div>
                </div>
            </div>
            {orderReceiveMethod !== "pickup" &&
            <div className={s.cart_form_item}>
                <div className={s.cart_form_item_title}>
                    Адрес доставки
                </div>

                {/*<div className={s.delivery_radio_inner}>*/}
                {/*    <div className={s.delivery_radio}>*/}
                {/*        <input {...register('delivery_method')} style={{width: "24px"}} value={"1"} id="delivery1"*/}
                {/*               type="radio" defaultChecked/>*/}
                {/*        <label htmlFor="delivery1">На адрес</label>*/}
                {/*    </div>*/}
                {/*    <div className={s.delivery_radio}>*/}
                {/*        <input {...register('delivery_method')} style={{width: "24px"}} value={"2"} id="delivery2"*/}
                {/*               type="radio"/>*/}
                {/*        <label htmlFor="delivery2">До станции метро</label>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={s.delivery_top_input_inner}>
                    <input {...register('address')} className={s.delivery_input_top} placeholder="Полный адрес" type="text"/>
                </div>

                {/*{deliveryAddressMethod === "2" && <>*/}
                {/*    <input {...register('metro_name')}*/}
                {/*           style={{marginTop: "25px", transition: "margin-top 0.9s ease-in-out"}}*/}
                {/*           placeholder={"Название метро"} className={s.contact_input} type="text"/>*/}
                {/*</>}*/}
            </div>
            }
            <div className={s.cart_form_item}>
                <textarea {...register('comments_on_the_order')} className={s.order_comment_textarea}
                          placeholder="Комментарий к заказу" id="order_comment" cols="30" rows="10"></textarea>
            </div>
            <div className={s.cart_form_item}>
                <div className={s.final_order_info}>
                    {/*<div className={s.final_order_info_cost}>Стоимость товаров:  ₽</div>*/}
                    {/*<div className={s.final_order_info_delivery}>Доставка:  ₽</div>*/}
                    {/*<div className={s.final_order_info_discount}>Ваша скидка: - ₽</div>*/}
                    {/*<div className={s.final_order_info_final_price}>Итого к оплате:  ₽</div>*/}
                    <div className={s.final_order_info_cost}>Стоимость товаров: {props.cartMoney.productsCost} ₽</div>
                    <div className={s.final_order_info_delivery}>Доставка: {props.cartMoney.deliveryCost} ₽</div>
                    <div className={s.final_order_info_discount}>Ваша скидка: -{props.cartMoney.discount} ₽</div>
                    <div className={s.final_order_info_final_price}>Итого к оплате: {props.cartMoney.finalCost} ₽</div>
                </div>
                <button disabled={!isValid} className={s.CartForm_btn}>Оформить заказ</button>
            </div>
        </div>
    </form>
}


export default CartForm
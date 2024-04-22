import React, {useState} from "react";
import s from "./../modalBase.module.css"
import {userAPI} from "../../../api/api";
import ix from "../../../assets/icons/AuthReg/ix.svg";

const ModalSuccessOrder = (props) => {

    return <div className={s.success_order_modal}>
        <img onClick={props.closeModal} src={ix} alt="ix" className={s.ix}/>
        <h2 className={s.title}>Поздравляю!</h2>
        <h2 className={s.title}>Заказ оформлен, но не оплачен!</h2>
        <h3 className={s.sub_title}>Оплатить заказ и получить дополнительную информацию по нему можно в личном
            кабинете</h3>
    </div>
}


export default ModalSuccessOrder;

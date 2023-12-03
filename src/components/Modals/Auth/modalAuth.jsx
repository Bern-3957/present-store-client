import React from "react";
import authImg from "../../../assets/images/AuthReg/Rectangle 33.png"
import eye from "../../../assets/icons/AuthReg/eye.svg"
import ix from "../../../assets/icons/AuthReg/ix.svg"
import s from "./modalAuth.module.css"

const ModalAuth = (props) => {

    return  <>
        <img src={authImg} alt="authImg" className={s.auth_img}/>
        <div className={s.auth_data}>
            <img onClick={props.closeModal} src={ix} alt="ix" className={s.ix}/>
            <div className={s.buttons}>
                <button onClick={()=>{
                    props.openModal('auth-modal')
                }} className={`${s.log_in_btn} ${props.isModalActive && s.isActive}`}>Войти</button>
                <button onClick={()=>{
                    props.openModal('reg-modal')
                }} className={s.sign_up_btn}>Зарегистрироваться</button>
            </div>
            <div className={s.auth_form}>
                <h2 className={s.title}>Войдите в свой аккаунт</h2>
                <input placeholder="Номер телефона" type="text" className={s.phone_number}/>
                <input placeholder="Пароль" type="text" className={s.password}/>
                <div className={s.checkbox_inner}>
                    <input  id="personal_data_ch" type="checkbox" className={s.checkbox}/>
                    <label className={s.personal_data_chLabal} htmlFor="personal_data_ch" >Я соглашаюсь
                        с Положением о персональных данных и конфиденциальности.</label>
                </div>
                <button className={s.log_in_btn}>Войти</button>
                <a onClick={()=>{
                    props.openModal('passRestore-modal')
                }} className={s.forgot_pass}>Забыли пароль?</a>
            </div>

        </div>
    </>
}


export default ModalAuth;
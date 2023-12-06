import React from "react";
import authImg from "../../../assets/images/AuthReg/Rectangle 33.png"
import eye from "../../../assets/icons/AuthReg/eye.svg"
import ix from "../../../assets/icons/AuthReg/ix.svg"
import s from "./../modalBase.module.css"
import {useForm} from "react-hook-form";


// const ModalAuth = (props) => {
//
//     return <div className={s.auth_form}>
//                 <h2 className={s.title}>Войдите в свой аккаунт</h2>
//                 <input placeholder="Номер телефона" type="text" className={s.phone_number}/>
//                 <input placeholder="Пароль" type="text" className={s.password}/>
//                 <div className={s.checkbox_inner}>
//                     <input  id="personal_data_ch" type="checkbox" className={s.checkbox}/>
//                     <label className={s.personal_data_chLabal} htmlFor="personal_data_ch" >Я соглашаюсь
//                         с Положением о персональных данных и конфиденциальности.</label>
//                 </div>
//                 <button className={s.log_in_btn}>Войти</button>
//                 <a onClick={()=>{
//                     props.openModal('passRestore-modal')
//                 }} className={s.forgot_pass}>Забыли пароль?</a>
//             </div>
// }
// export default ModalAuth;

const ModalAuth = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    return <form onSubmit={handleSubmit(onSubmit)} className={s.auth_form}>
        <h2 className={s.title}>Войдите в свой аккаунт</h2>

        <input
            {...register('phone_number',
                {required: "Поле обязательно к заполнению",
                        minLength: {value: 5, message: "от 5 символов"}
                })}
            placeholder="Номер телефона" type="text" className={s.phone_number}/>
        <div>{errors?.phone_number && <p>{errors?.phone_number?.message || "Error!"}</p>}</div>

        <input {...register('password', {
            required: "Поле обязательно к заполнению",
            minLength: {value: 7, message: "от 7 символов"}
        })} placeholder="Пароль" type="text" className={s.password}/>
        <div>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}</div>

        <div className={s.checkbox_inner}>
            <input {...register('checkbox', {
                required: "Поле обязательно к заполнению"
            })} id="personal_data_ch" type="checkbox" className={s.checkbox}/>
            <label className={s.personal_data_chLabal} htmlFor="personal_data_ch">Я соглашаюсь
                с Положением о персональных данных и конфиденциальности.</label>
        </div>
        <div>{errors?.checkbox && <p>{errors?.checkbox?.message || "Error!"}</p>}</div>

        <button type="submit" disabled={!isValid} className={s.log_in_btn}>Войти</button>
        <a onClick={() => {
            props.openModal('passRestore-modal')
        }} className={s.forgot_pass}>Забыли пароль?</a>
    </form>
}
export default ModalAuth;


// import React from "react";
// import authImg from "../../../assets/images/AuthReg/Rectangle 33.png"
// import eye from "../../../assets/icons/AuthReg/eye.svg"
// import ix from "../../../assets/icons/AuthReg/ix.svg"
// import s from "./../modalBase.module.css"
//
// const ModalAuth = (props) => {
//
//     return  <>
//         <img src={authImg} alt="authImg" className={s.auth_img}/>
//         <div className={s.auth_data}>
//             <img onClick={props.closeModal} src={ix} alt="ix" className={s.ix}/>
//             <div className={s.buttons}>
//                 <button onClick={()=>{
//                     props.openModal('auth-modal')
//                 }} className={`${s.log_in_btn} ${props.isModalActive && s.isActive}`}>Войти</button>
//                 <button onClick={()=>{
//                     props.openModal('reg-modal')
//                 }} className={s.sign_up_btn}>Зарегистрироваться</button>
//             </div>
//             <div className={s.auth_form}>
//                 <h2 className={s.title}>Войдите в свой аккаунт</h2>
//                 <input placeholder="Номер телефона" type="text" className={s.phone_number}/>
//                 <input placeholder="Пароль" type="text" className={s.password}/>
//                 <div className={s.checkbox_inner}>
//                     <input  id="personal_data_ch" type="checkbox" className={s.checkbox}/>
//                     <label className={s.personal_data_chLabal} htmlFor="personal_data_ch" >Я соглашаюсь
//                         с Положением о персональных данных и конфиденциальности.</label>
//                 </div>
//                 <button className={s.log_in_btn}>Войти</button>
//                 <a onClick={()=>{
//                     props.openModal('passRestore-modal')
//                 }} className={s.forgot_pass}>Забыли пароль?</a>
//             </div>
//
//         </div>
//     </>
// }
//
//
// export default ModalAuth;
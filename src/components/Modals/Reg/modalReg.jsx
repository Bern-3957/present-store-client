import React from "react";
import regImg from "../../../assets/images/AuthReg/Rectangle 33.png"
import eye from "../../../assets/icons/AuthReg/eye.svg"
import ix from "../../../assets/icons/AuthReg/ix.svg"
import s from "./../modalBase.module.css"
import {useForm} from "react-hook-form";

const ModalReg = (props) => {
    const {register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)} className={s.auth_form}>
                <h2 className={s.title}>Зарегистрируйтесь</h2>
                <input {...register('name', {required: true})} placeholder="Имя" type="text" className={s.password}/>
                <input {...register('phone_number', {required: true})} placeholder="Номер телефона" type="text" className={s.phone_number}/>
                <input {...register('email', {required: true})} placeholder="E-mail" type="text" className={s.password}/>
                <input {...register('password', {required: true})} placeholder="Пароль" type="text" className={s.password}/>
                <div className={s.checkbox_inner}>
                    <div>
                        <input {...register('newsCheckbox', {required: true})} id="personal_data_ch" type="checkbox" className={s.checkbox}/>
                        <label className={s.personal_data_chLabal} htmlFor="personal_data_ch">Согласен(-на)
                            на получение новостной рассылки (дает постоянную скидку 5%)</label>
                    </div>
                    <div>
                        <input {...register('personDataCheckbox', {required: true})} id="personal_data_ch" type="checkbox" className={s.checkbox}/>
                        <label className={s.personal_data_chLabal} htmlFor="personal_data_ch">Я соглашаюсь
                            с Положением о персональных данных и конфиденциальности.</label>
                    </div>
                </div>
                <button type="submit" className={s.log_in_btn}>Зарегистрироваться</button>
                <div>{!isValid && <p>Все поля обязательны к заполнению!</p>}</div>
            </form>

}


export default ModalReg;


// import React from "react";
// import regImg from "../../../assets/images/AuthReg/Rectangle 33.png"
// import eye from "../../../assets/icons/AuthReg/eye.svg"
// import ix from "../../../assets/icons/AuthReg/ix.svg"
// import s from "./../modalBase.module.css"
//
// const ModalReg = (props) => {
//
//     return <>
//         <img src={regImg} alt="authImg" className={s.auth_img}/>
//         <div className={s.auth_data}>
//             <img onClick={props.closeModal} src={ix} alt="ix" className={s.ix}/>
//             <div className={s.buttons}>
//                 <button onClick={()=>{
//                     props.openModal('auth-modal')
//                 }} className={s.log_in_btn}>Войти</button>
//                 <button onClick={()=>{
//                     props.openModal('reg-modal')
//                 }} className={`${s.log_in_btn} ${props.isModalActive && s.isActive}`}>Зарегистрироваться</button>
//             </div>
//             <div className={s.auth_form}>
//                 <h2 className={s.title}>Зарегистрируйтесь</h2>
//                 <input placeholder="Имя" type="text" className={s.password}/>
//                 <input placeholder="Номер телефона" type="text" className={s.phone_number}/>
//                 <input placeholder="E-mail" type="text" className={s.password}/>
//                 <input placeholder="Пароль" type="text" className={s.password}/>
//                 <div className={s.checkbox_inner}>
//                     <div>
//                         <input id="personal_data_ch" type="checkbox" className={s.checkbox}/>
//                         <label className={s.personal_data_chLabal} htmlFor="personal_data_ch">Согласен(-на)
//                             на получение новостной рассылки (дает постоянную скидку 5%)</label>
//                     </div>
//                     <div>
//                         <input id="personal_data_ch" type="checkbox" className={s.checkbox}/>
//                         <label className={s.personal_data_chLabal} htmlFor="personal_data_ch">Я соглашаюсь
//                             с Положением о персональных данных и конфиденциальности.</label>
//                     </div>
//                 </div>
//                 <button className={s.log_in_btn}>Зарегистрироваться</button>
//             </div>
//
//         </div>
//     </>
// }
//
//
// export default ModalReg;
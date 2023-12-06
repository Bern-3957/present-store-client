import React from "react";
import regImg from "../../../assets/images/AuthReg/Rectangle 33.png"
import eye from "../../../assets/icons/AuthReg/eye.svg"
import ix from "../../../assets/icons/AuthReg/ix.svg"
import s from "./../modalBase.module.css"
import {useForm} from "react-hook-form";

const ModalPassRestore = (props) => {
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
                <h2 className={s.title}>Востановление пароля</h2>
                <label htmlFor="chPass" className={s.forgot_pass}>Введите код из СМС</label>
                <input {...register('code', {required: true})} style={{marginTop: '20px'}} id="chPass" placeholder="Код" type="text" className={s.password}/>


                <button type='submit' style={{marginTop: '20px'}} className={s.log_in_btn}>Подтвердить</button>
                <a href="#" className={s.forgot_pass}>Отправить код повторно</a>
            </form>

}


export default ModalPassRestore;



// import React from "react";
// import regImg from "../../../assets/images/AuthReg/Rectangle 33.png"
// import eye from "../../../assets/icons/AuthReg/eye.svg"
// import ix from "../../../assets/icons/AuthReg/ix.svg"
// import s from "./../modalBase.module.css"
//
// const ModalPassRestore = (props) => {
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
//                 <h2 className={s.title}>Востановление пароля</h2>
//                 <label htmlFor="chPass" className={s.forgot_pass}>Введите код из СМС</label>
//                 <input style={{marginTop: '20px'}} id="chPass" placeholder="Код" type="text" className={s.password}/>
//
//
//                 <button style={{marginTop: '20px'}} className={s.log_in_btn}>Подтвердить</button>
//                 <a href="#" className={s.forgot_pass}>Отправить код повторно</a>
//             </div>
//
//         </div>
//     </>
// }
//
//
// export default ModalPassRestore;
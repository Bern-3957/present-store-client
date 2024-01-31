// import React from "react";
// import s from "./personalAreaForm.module.css"
// import {useForm, useWatch} from "react-hook-form";
// import personalArea from "../personalArea";
// import axios from "axios";
//
// const  PersonalAreaForm = (props) =>{
//     const {register,
//         handleSubmit,
//         formState:{errors, isValid},
//         reset,
//         control
//     } = useForm({mode: "onChange"})
//
//     const watchedValue = useWatch({
//         control,
//         name: 'name', // имя поля ввода, для которого вы хотите отслеживать изменения
//     });
//
//     const onSubmit = (data, event) => {
//         debugger;
//         if (event.target.name === 'logout'){
//             axios.post('http://127.0.0.1:8000/auth/token/logout/', {}, {
//                 headers: {
//                     'Authorization': `Token ${props.userToken}`
//                 }
//             }).finally(()=>{
//                 props.setIsUserAuth(false)
//             })
//         } else if(event.target.name === 'change-user-info'){
//
//         }
//         else {
//             debugger;
//
//             alert(JSON.stringify(data))
//         }
//     }
//
//     const handleInputChange = (value) => {
//         debugger;
//         props.changeUserInfo(value)
//         // Дополнительная логика или обновление состояния при изменении значения
//     };
//
//
//     return <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Контактные данные</h3>
//             <input  value={props.userInfo.first_name} onChange={(e) => handleInputChange(e.target.value)} className={s.input} {...register('name', {required: false})} placeholder='Имя' type="text"/>
//             <input  value={props.userInfo.email} onChange={handleSubmit(onSubmit)} className={s.input} {...register('email', {required: false})} placeholder='Email' type="text"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Данные для входа</h3>
//             <input value={props.userInfo.username} className={s.input} {...register('username', {required: false})} placeholder='Имя пользователя' type="text"/>
//             <input className={s.input} {...register('password', {required: false})} placeholder='Пароль' type="password"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Адрес доставки</h3>
//             <input className={s.input} {...register('address', {required: false})} placeholder='Адрес' type="text"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Участие в рассылке</h3>
//             <div className={s.checkboxInner}>
//                 <input {...register('personalCheckbox')} type="checkbox" id="personalCheckbox" className={s.personalCheckbox}/>
//                 <label style={{fontFamily: 'Open Sans',
//                     fontSize: '14px',
//                     fontWeight: '400',}} htmlFor="personalCheckbox">Даю согласие на получение новостной рассылки <span style={{color: "#AD6A75"}}>(для получения постоянной скидки 5%)</span></label>
//             </div>
//         </div>
//
//         <div className={s.buttons}>
//             <button name="logout" style={{cursor: 'pointer'}} className={s.personalAreaButton} onClick={handleSubmit(onSubmit)} type="button">Выйти из аккаунта</button>
//             <button name="change-user-info" style={{cursor: 'pointer'}} className={s.personalAreaButton} onClick={handleSubmit(onSubmit)} type="button">Сохранить изменения</button>
//         </div>
//     </form>
// }
//
// export default  PersonalAreaForm;


// import React from "react";
// import s from "./personalAreaForm.module.css"
// import axios from "axios";
// import {userAPI} from "../../../api/api";
//
// const PersonalAreaForm = (props) => {
//
//     const onUserInfoChange = (e) => {
//         const field_name = e.target.name
//         if (e.target.type === "checkbox") {
//             props.changeUserInfo({[field_name]: e.target.checked});
//         } else {
//             props.changeUserInfo({[field_name]: e.target.value});
//         }
//     }
//
//     const handleClick = () => {
//         let updateUserData= {...props.userInfo};
//         delete updateUserData.id;
//         userAPI.changeUserInfo(props.userToken, updateUserData)
//     }
//
//     return <form className={s.form}>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Контактные данные</h3>
//             <input value={props.userInfo.first_name} name='first_name' onChange={onUserInfoChange} className={s.input} placeholder='Имя' type="text"/>
//             <input value={props.userInfo.email} name='email' onChange={onUserInfoChange} className={s.input} placeholder='Email' type="text"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Данные для входа</h3>
//             <input value={props.userInfo.username} onChange={onUserInfoChange} className={s.input} placeholder='Имя пользователя' type="text"/>
//             <input className={s.input} placeholder='Пароль' type="password"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Адрес доставки</h3>
//             <input value={props.userInfo.address} name='address' onChange={onUserInfoChange} className={s.input} placeholder='Адрес' type="text"/>
//         </div>
//         <div className={s.formItem}>
//             <h3 className={s.title}>Участие в рассылке</h3>
//             <div className={s.checkboxInner}>
//                 <input name='consentReceiveNews' onChange={onUserInfoChange} checked={props.userInfo.consentReceiveNews} type="checkbox" id="personalCheckbox" className={s.personalCheckbox}/>
//                 <label style={{
//                     fontFamily: 'Open Sans',
//                     fontSize: '14px',
//                     fontWeight: '400',
//                 }} htmlFor="personalCheckbox">Даю согласие на получение новостной рассылки <span style={{color: "#AD6A75"}}>(для получения постоянной скидки 5%)</span></label>
//             </div>
//         </div>
//
//         <div className={s.buttons}>
//             <button name="logout" style={{cursor: 'pointer'}} className={s.personalAreaButton} type="submit">Выйти из аккаунта</button>
//             <button onClick={handleClick} name="change-user-info" style={{cursor: 'pointer'}} className={s.personalAreaButton} type="button">Сохранить изменения</button>
//         </div>
//     </form>
// }
//
// export default PersonalAreaForm;


import React from "react";
import s from "./personalAreaForm.module.css";
import { userAPI } from "../../../api/api";

const PersonalAreaForm = (props) => {

    const onUserInfoChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        props.changeUserInfo({ [name]: fieldValue });
    };
    const handleLogout = async () => {
        try {
            await userAPI.logoutUser(props.userToken);
            props.setIsUserAuth(false);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleSaveChanges = async () => {
        try {
            const updateUserData = { ...props.userInfo, id: undefined };
            await userAPI.changeUserInfo(props.userToken, updateUserData);
        } catch (error) {
            console.error("Save changes error:", error);
        }
    };

    return (
        <form className={s.form} onSubmit={handleSaveChanges}>
            <div className={s.formItem}>
                <h3 className={s.title}>Контактные данные</h3>
                <input
                    value={props.userInfo.first_name}
                    name='first_name'
                    onChange={onUserInfoChange}
                    className={s.input}
                    placeholder='Имя'
                    type="text"
                />
                <input
                    value={props.userInfo.email}
                    name='email'
                    onChange={onUserInfoChange}
                    className={s.input}
                    placeholder='Email'
                    type="text"
                />
            </div>
            <div className={s.formItem}>
                <h3 className={s.title}>Данные для входа</h3>
                <input
                    value={props.userInfo.username}
                    onChange={onUserInfoChange}
                    className={s.input}
                    placeholder='Имя пользователя'
                    type="text"
                />
                <input
                    className={s.input}
                    placeholder='Пароль'
                    type="password"
                />
            </div>
            <div className={s.formItem}>
                <h3 className={s.title}>Адрес доставки</h3>
                <input
                    value={props.userInfo.address}
                    name='address'
                    onChange={onUserInfoChange}
                    className={s.input}
                    placeholder='Адрес'
                    type="text"
                />
            </div>
            <div className={s.formItem}>
                <h3 className={s.title}>Участие в рассылке</h3>
                <div className={s.checkboxInner}>
                    <input
                        name='consentReceiveNews'
                        onChange={onUserInfoChange}
                        checked={props.userInfo.consentReceiveNews}
                        type="checkbox"
                        id="personalCheckbox"
                        className={s.personalCheckbox}
                    />
                    <label style={{
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        fontWeight: '400',
                    }} htmlFor="personalCheckbox">
                        Даю согласие на получение новостной рассылки
                        <span style={{ color: "#AD6A75" }}>(для получения постоянной скидки 5%)</span>
                    </label>
                </div>
            </div>

            <div className={s.buttons}>
                <button name="logout" style={{ cursor: 'pointer' }}
                        className={s.personalAreaButton} onClick={handleLogout} type="button">Выйти из аккаунта</button>
                <button name="change-user-info"
                        style={{ cursor: 'pointer' }} className={s.personalAreaButton} onClick={handleSaveChanges}
                        type="button">Сохранить изменения</button>
            </div>
        </form>
    );
};

export default PersonalAreaForm;

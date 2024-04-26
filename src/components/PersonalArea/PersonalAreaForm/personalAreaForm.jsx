
import React from "react";
import s from "./personalAreaForm.module.css";
import { userAPI } from "../../../api/api";


const PersonalAreaForm = (props) => {

    const onUserInfoChange = (e) => {
        debugger
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        props.changeUserInfo({ [name]: fieldValue });
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

                <button name="change-user-info"
                        style={{cursor: 'pointer'}} className={s.personalAreaButton} onClick={handleSaveChanges}
                        type="button">Сохранить изменения
                </button>

                <button name="logout" style={{cursor: 'pointer'}}
                        className={s.personalAreaButton} onClick={props.handleLogout} type="button">Выйти из аккаунта
                </button>
            </div>
        </form>
    );
};

export default PersonalAreaForm;

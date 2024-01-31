import React from "react";
import s from "./personalArea.module.css"
import PersonalAreaForm from "./PersonalAreaForm/personalAreaForm";

const  PersonalArea = (props) =>{
    return <div className={s.personalArea}>
        <div className={s.personalArea_inner}>
            <h2 className={s.title}>Личный кабинет</h2>
            <div className={s.menu}>
                <button className={s.menu_button}>Мои данные</button>
                <button className={s.menu_button}>Личная скидка</button>
                <button className={s.menu_button}>Мои покупки</button>
            </div>
            <PersonalAreaForm setIsUserAuth={props.setIsUserAuth}
                              isUserAuth={props.isUserAuth}
                              userInfo={props.userInfo}
                              userToken={props.userToken}
                              changeUserInfo={props.changeUserInfo}/>
        </div>
    </div>
}

export default  PersonalArea;



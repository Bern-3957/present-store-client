import React from "react";
import s from "./personalArea.module.css"
import PersonalAreaForm from "./PersonalAreaForm/personalAreaForm";
import MyDiscount from "./MyDiscount/MyDiscount";
import MyOrdersContainer from "./MyOrders/MyOrdersContainer";

const  PersonalArea = (props) =>{
    return <div className={s.personalArea}>
        <div className={s.personalArea_inner}>
            <h2 className={s.title}>Личный кабинет</h2>
            <div className={s.menu}>
                <button onClick={()=>props.setPersonalAreaPage("myData")} className={s.menu_button}>Мои данные</button>
                <button onClick={()=>props.setPersonalAreaPage("myDiscount")} className={s.menu_button}>Личная скидка</button>
                <button onClick={()=>props.setPersonalAreaPage("myOrders")} className={s.menu_button}>Мои заказы</button>
            </div>
            {props.personalAreaPage === "myData" ?
            <PersonalAreaForm setIsAuthenticated={props.setIsAuthenticated}
                              isAuthenticated={props.isAuthenticated}
                              userInfo={props.userInfo}
                              userToken={props.userToken}
                              handleLogout={props.handleLogout}
                              changeUserInfo={props.changeUserInfo}/> : props.personalAreaPage === "myDiscount" ?
                    <MyDiscount/>: props.personalAreaPage === "myOrders" ? <MyOrdersContainer userToken={props.userToken}/> : <p></p>}
        </div>
    </div>
}

export default  PersonalArea;



import React from "react";
import present from "../../../assets/icons/AuthReg/present.svg"
import s from "./../modalBase.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";

const ModalSuccessReg = (props) => {

    return <div className={s.auth_form}>
                <img src={present} alt="present"/>
                <h2 className={s.title}>Спасибо за регистрацию</h2>
                <div style={{marginBottom: '15px'}}>Приятных покупок</div>
                <button className={s.log_in_btn}><Link onClick={()=>{props.closeModal()}} style={{color: '#6B6B6B', textDecoration: 'none'}} to={ROUTES.CATALOG} >В каталог</Link></button>
                <button className={s.log_in_btn}><Link onClick={()=>{props.closeModal()}} className={s.log_in_btn_link} to={ROUTES.PERSONAL_AREA}>В личный кабинет</Link></button>

    </div>

}


export default ModalSuccessReg;

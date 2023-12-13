import React from "react";
import logo from './../../../assets/icons/upheader/logo.svg'
import previous from './../../../assets/icons/upheader/previous.svg'
import Quality from './../../../assets/icons/upheader/Quality.svg'
import Discount from './../../../assets/icons/upheader/Discount.svg'
import b from './../../../assets/icons/upheader/b.svg'
import a from './../../../assets/icons/upheader/a.svg'
import next from './../../../assets/icons/upheader/next.svg'
import telegram from './../../../assets/icons/upheader/telegram.svg'
import whatsap from './../../../assets/icons/upheader/whatsap.svg'
import basket from './../../../assets/icons/upheader/basket.svg'
import login from './../../../assets/icons/upheader/login.svg'
import userIcon from './../../../assets/icons/upheader/userIcon.svg'

import s from './Upheader.module.css'
import axios from "axios";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";

const Upheader = (props) => {
    const logout = () => {
        axios.post('http://127.0.0.1:8000/auth/token/logout/', {}, {
            headers: {
                'Authorization': `Token ${props.userToken}`
            }
        }).finally(()=>{
            props.setIsUserAuth(false)
        })
    }
    return (
        <div className={s.upheader}>
            <div className="container">
                <div className={s.upheader_inner}>
                    <img className={s.upheader_logo} src={logo} alt="r"/>
                    <div className={s.upheader_slider}>
                        <button className={s.upheader_slider_previous}><img src={previous} alt="previous"/></button>
                        <div className={s.upheader_slider_inner}>
                            <div className={s.upheader_slider_line}>

                                <div className={s.upheader_slider_line_item}>

                                    <div className={s.upheader_slider_line_item_circle}>
                                        <img src={Quality} alt="" className={s.upheader_slider_line_item_circle_img}/>
                                    </div>
                                    <div className={s.upheader_slider_line_item_text}>Гарантия качества</div>

                                </div>
                                <div className={s.upheader_slider_line_item}>

                                    <div className={s.upheader_slider_line_item_circle}>
                                        <img src={Discount} alt="" className={s.upheader_slider_line_circle_item_img}/>
                                    </div>
                                    <div className={s.upheader_slider_line_item_text}>Система скидок</div>

                                </div>
                                <div className={s.upheader_slider_line_item}>

                                    <div className={s.upheader_slider_line_item_circle}>
                                        <img src={b} alt="" className={s.upheader_slider_line_circle_item_img}/>
                                    </div>
                                    <div className={s.upheader_slider_line_item_text}>Бесплатная открытка</div>

                                </div>
                                <div className={s.upheader_slider_line_item}>

                                    <div className={s.upheader_slider_line_item_circle}>
                                        <img src={a} alt="" className={s.upheader_slider_line_circle_item_img}/>
                                    </div>
                                    <div className={s.upheader_slider_line_item_text}>Анонимная доставка</div>

                                </div>

                            </div>
                        </div>
                        <button className={s.upheader_slider_next}><img src={next} alt="next"/></button>
                    </div>
                    <div className={s.upheader_contacts}>
                        <div className={s.upheader_contacts_line1}>
                            <img src={whatsap} alt="wh"/>
                            <span className={s.upheader_span}>+7 (985) 223-40-59</span>
                        </div>
                        <div className={s.upheader_contacts_line2}>
                            <img src={telegram} alt="tel"/>
                            <span className={s.upheader_span}>с 9:00 до 19:00 (Пн-Сб)</span>
                        </div>
                    </div>
                    <div className={s.upheader_buttons}>
                        <button onClick={() => {
                            logout()
                        }} className={s.upheader_buttons_basket}><img src={basket} alt="basket"/></button>
                        {!props.isUserAuth ?
                            <span onClick={() => {
                                props.openModal('auth-modal')
                            }} className={s.upheader_buttons_login}><img src={login} alt="login"/>Войти</span>
                            : <span className={s.upheader_buttons_login}>

                                <Link to={ROUTES.PERSONAL_AREA}><img src={userIcon} alt="userIcon"/></Link>
                                <Link to={ROUTES.PERSONAL_AREA} style={{
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}>{props.userInfo.username}</Link>
                            </span>}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Upheader
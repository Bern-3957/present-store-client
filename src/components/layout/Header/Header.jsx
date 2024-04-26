import React, {useState} from "react";
import hurt from './../../../assets/icons/header/hurt.svg'
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";
import burger from "./../../../assets/icons/header/burger.svg"
import x from "./../../../assets/icons/header/x.svg"

const Header = (props) =>{
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const a_style = {
        textDecoration: 'none',
        color: '#464646'
    }
    return (<div className={s.header}>
                <div className="container">
                    <div className={s.header_inner}>
                        <div className={s.header_main}>
                            <img className={s.header_main_img} src={hurt} alt="hurt"/>
                            {/*<a href="#" style={a_style}>Главная</a>*/}
                            <Link to={ROUTES.HOME} style={a_style}>Главная</Link>

                        </div>
                        {/*<a href="#" className={s.header_button}>Каталог подарков</a>*/}
                        <Link to={ROUTES.CATALOG} className={s.header_button}>Каталог подарков</Link>
                        <nav className={!isBurgerActive ? s.header_nav : s.header_burger_nav}>
                            <a className={s.header_nav_item} href="#">О нас</a>
                            <a className={s.header_nav_item} href="#">Доставка</a>
                            <a className={s.header_nav_item} href="#">Акции</a>
                            <a className={s.header_nav_item} href="#">Скидки</a>
                            <a className={s.header_nav_item} href="#">Контакты</a>

                        </nav>

                        <div onClick={()=> setIsBurgerActive(!isBurgerActive)} className={s.header_burger}>
                            {isBurgerActive ?
                                <img style={{width: '20px', height: '20px', transition: '.6s'}}
                                     src={x} alt="burger"/>
                                :
                                <img style={{width: '35px', height: '35px', transition: '.6s'}}
                                     src={burger} alt="burger"/>
                            }
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Header
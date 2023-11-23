import React from "react";
import hurt from './../../../assets/icons/header/hurt.svg'
import s from './Header.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";

const Header = (props) =>{
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
                        <nav className={s.header_nav}>
                            <a className={s.header_nav_item} href="#">О нас</a>
                            <a className={s.header_nav_item} href="#">Доставка</a>
                            <a className={s.header_nav_item} href="#">Акции</a>
                            <a className={s.header_nav_item} href="#">Скидки</a>
                            <a className={s.header_nav_item} href="#">Контакты</a>
                            <a className={s.header_nav_item} href="#" title="Админ панель">А</a>

                        </nav>

                    </div>
                </div>
            </div>
    );
}


export default Header
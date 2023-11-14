import React from "react";
import s from './Footer.module.css'
import telegram from "./../../../assets/icons/footer/telegram.svg"
import whatsapp from "./../../../assets/icons/footer/whatsapp (1).svg"
import logo_footer from "./../../../assets/icons/footer/logo-footer.png"
const Footer = (props) => {

    return (<footer className={s.footer}>
                <div className="container">
                    <div className={s.footer_inner}>
                        <div className={s.footer_block_left}>
                            <img src={logo_footer} alt="logo" className={s.footer_logo}/>
                                <span>Политика конфиденциальности</span>
                                <span>Copyright © 2023, комплименты</span>
                        </div>
                        <div className={s.footer_block_middle}>
                            <div className={s.footer_block_middle_left}>
                                <span>Каталог подарков</span>
                                <span>О нас</span>
                                <span>Контакты</span>
                            </div>
                            <div className={s.footer_block_middle_right}>
                                <span>Доставка</span>
                                <span>Акции</span>
                                <span>Скидки</span>
                            </div>
                        </div>
                        <div className={s.footer_block_right}>
                            <span>+7 (985) 223-40-59</span>
                            <span>info@complimente.ru</span>
                            <span>с 9:00 до 19:00 (Пн-Сб)</span>
                            <div className={s.footer_block_right_icons}>
                                <img src={telegram} alt=""
                                     className={s.footer_block_right_icons-telegram}/>
                                    <img src={whatsapp} alt=""
                                    className={s.footer_block_right_icons-whatsapp}/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
);
}


export default Footer
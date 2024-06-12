import React, {useEffect, useState} from "react";
import s from "./AboutProduct.module.css"
import bigImage from "./../../assets/images/AboutProduct/bigImage.png"
import smallImage from "./../../assets/images/AboutProduct/smallImage.png"
import sdec_icon from "./../../assets/images/AboutProduct/sdec_icon.svg"
import telegram_icon from "./../../assets/images/AboutProduct/telegram-icon.svg"
import whatsapp_icon from "./../../assets/images/AboutProduct/whatsapp-icon.svg"
import vk_icon from "./../../assets/images/AboutProduct/vk-icon.svg"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import axios from "axios";


const AboutProduct = (props) => {
    const [currentImage, setCurrentImage] = useState({})

    // const getImageURL = (secondPartOfURL) => {
    //     return `http://127.0.0.1:8000${secondPartOfURL}`
    // }

    const getImage = (type) => {
        switch (type) {
            case 'GET-MINI-IMAGE':
                if (props.currentProduct.images && props.currentProduct.images.length !== 0) {
                    return <div className={s.miniImages}>
                        {props.currentProduct.images.map(item => {
                            return <div onClick={() => {
                                setCurrentImage(item)
                            }} className={s.miniImageCont}>
                                <img src={item && item.image} className={s.miniImage} alt="smallImage"/>
                            </div>

                        })}
                    </div>
                } else {
                    return <div className={s.miniImages}>
                        <div className={s.miniImageCont}>
                            <img src={smallImage} className={s.miniImage} alt="smallImage"/>
                        </div>

                        <div className={s.miniImageCont}>
                            <img src={smallImage} className={s.miniImage} alt="smallImage"/>
                        </div>

                        <div className={s.miniImageCont}>
                            <img src={smallImage} className={s.miniImage} alt="smallImage"/>
                        </div>

                        <div className={s.miniImageCont}>
                            <img src={smallImage} className={s.miniImage} alt="smallImage"/>
                        </div>

                    </div>
                }
            case 'GET-CURRENT-IMAGE':
                if (props.currentProduct.images && props.currentProduct.images.length !== 0) {
                    return <div className={s.currentImageCont}>
                        <img className={s.currentImage}
                             src={currentImage.image ?
                                 currentImage.image :
                                 props.currentProduct.images[0].image && props.currentProduct.images[0].image}
                             alt="bigImage"/>
                    </div>
                } else {
                    return <div className={s.currentImageCont}>
                        <img className={s.currentImage} src={bigImage} alt="bigImage"/>
                    </div>
                }
        }
    }


    return <div className={s.AboutProduct}>
        <div className="container">
            <div className={s.inner}>

                <div className={s.images}>
                    {getImage('GET-MINI-IMAGE')}
                    {getImage('GET-CURRENT-IMAGE')}
                </div>

                <div className={s.info}>
                    <h2 className={s.title}>{props.currentProduct.title}</h2>
                    <div className={s.art}>art. {props.currentProduct.vendor_code}</div>
                    <div className={s.description}>
                        <div className={s.description_title}>Описание товара</div>
                        <div className={s.description_text}>
                            {props.currentProduct.description}
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                        <div className={s.price}>{props.currentProduct.price} ₽</div>
                        {/*<button className={s.add_to_basket_btn}>В корзину</button>*/}
                        {props.cart_items.find((cart_item) => cart_item.product_details.id === props.currentProduct.id) ?
                            <Link
                                className={s.add_to_basket_btn_product_in_cart} to={ROUTES.CART}>В корзине Перейти
                            </Link>
                            :
                            <button onClick={() => {
                                props.isAuthenticated ?
                                    props.addNewCart(props.currentProduct.id) :
                                    props.openModal('auth-modal')
                            }} className={s.add_to_basket_btn}>В корзину</button>
                        }
                    </div>
                    <div className={s.sdek_info}>
                        <div className={s.sdek_icon}><img src={sdec_icon} alt="sdec_icon"/></div>
                        <div className={s.sdek_text}>Товар можно отправить СДЭКом</div>
                    </div>
                    <div className={s.share}>
                        <div className={s.share_text}>Поделиться:</div>

                        <div className={s.shere_icon}><img src={telegram_icon} alt="telegram_icon"/></div>
                        <div className={s.shere_icon}><img src={whatsapp_icon} alt="whatsapp_icon"/></div>
                        <div className={s.shere_icon}><img src={vk_icon} alt="vk_icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutProduct
import React from "react";
import s from "./Infoblock.module.css"
import Rectangle10 from "./../../assets/images/Rectangle 10.png"
import Rectangle13 from "./../../assets/images/Rectangle 13.png"
import Rectangle14 from "./../../assets/images/Rectangle 14.png"
import Rectangle15 from "./../../assets/images/Rectangle 15.png"
import clock from "./../../assets/icons/infoblock/clock.png"
import bant from "./../../assets/icons/infoblock/bant.png"
import present from "./../../assets/icons/infoblock/present.png"
import Infoblock_inner from "./Infoblock_inner/Infoblock_inner";

const InfoBlock = (props) => {
    return (<div>
        <div className={s.infoblockindex}>
            <div className="container">
                <Infoblock_inner/>
                <div className={s.adv_infoblock_inner}>
                    <div className={s.adv_infoblock_item}>
                        <div className={s.adv_infoblock_rectangle}>
                            <img src={clock} alt="icon" className={s.adv_infoblock_img}/>
                        </div>
                        <div className={s.adv_infoblock_title}>Экономия времени</div>
                        <div className={s.adv_infoblock_text}>Мы уже составили идеальные готовые наборы, вам осталось только выбрать подходящий</div>
                    </div>
                    <div className={s.adv_infoblock_item}>
                        <div className={s.adv_infoblock_rectangle}>
                            <img src={present} alt="icon" className={s.adv_infoblock_img}/>
                        </div>
                        <div className={s.adv_infoblock_title}>Широкий ассортимент</div>
                        <div className={s.adv_infoblock_text}>На нашем сайте вы сможете найти подходящий подарок на любое мероприятие</div>
                    </div>
                    <div className={s.adv_infoblock_item}>
                        <div className={s.adv_infoblock_rectangle}>
                            <img src={bant} alt="icon" className={s.adv_infoblock_img}/>
                        </div>
                        <div className={s.adv_infoblock_title}>Отличное качество</div>
                        <div className={s.adv_infoblock_text}>Мы все тщаетельно проверяем и красиво упаковываем, чтобы ничто не смогло испортить ваш праздник</div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default InfoBlock
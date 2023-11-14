import React from "react";
import s from './Infoblock_inner.module.css'
import Rectangle10 from "../../../assets/images/Rectangle 10.png";
import Rectangle13 from "../../../assets/images/Rectangle 13.png";
import Rectangle14 from "../../../assets/images/Rectangle 14.png";
import Rectangle15 from "../../../assets/images/Rectangle 15.png";
const Infoblock_inner = (props) => {
    return (
        <div className={s.infoblock_inner}>
            <div className={s.infoblock_item}>
                <div className={s.infoblock_item_text}>К праздникам</div>
                <img src={Rectangle10} alt="img" className={s.infoblock_item_img}/>
            </div>
            <div className={s.infoblock_item}>
                <div className={`${s.infoblock_item_text} ${s.infoblock_item_text_right}`}>Для нее</div>
                <img src={Rectangle13} alt="img" className={s.infoblock_item_img}/>
            </div>
            <div className={s.infoblock_item}>
                <div className={`${s.infoblock_item_text} ${s.infoblock_item_text_bot}`}>Для него</div>
                <img src={Rectangle14} alt="img" className={s.infoblock_item_img}/>
            </div>
            <div className={s.infoblock_item}>
                <div className={s.infoblock_item_text}>Корпоративные</div>
                <img src={Rectangle15} alt="img" className={s.infoblock_item_img}/>
            </div>
        </div>
    )
}


export default Infoblock_inner



import React from "react";
import s from './Catalog_child.module.css'


const Catalog_child_item = (props) => {
    return (
        <div className={s.catalog_child_item}>
            <img src={props.img} alt="1" className={s.catalog_child_item_img}/>
            <a href="" className={s.catalog_child_item_inner}>
                <div className={s.catalog_child_item_text}>{props.title}</div>
            </a>
        </div>
    )
}

export default Catalog_child_item
import React, {useState} from "react";
import s from "./SortSelect.module.css"
import otkrivashka from "./../../../../assets/icons/filter/Otkrivashka.svg"

const SortSelect = (props) => {
    const [isBodyVisible, setBodyVisible] = useState(false);
    const currentSortOption = props.sortSelect.find(item => item.id === props.activeSortSelectID);

    const openSelect =()=>{
        setBodyVisible(!isBodyVisible);
    }
    const setNewCurrentItem = (select_item_id) =>{
        props.setSortSelect(select_item_id)
        setBodyVisible(!isBodyVisible)
    }

    return <div className={s.select}>
        <div className={s.title}>Сортировать:</div>
        <div className={s.inner}>
            <div className={s.header}>
                <span className={s.select_current} id="current_price_mode">{currentSortOption && currentSortOption.title ? currentSortOption.title : 'По умолчанию'}</span>
                <img onClick={openSelect} src={otkrivashka} className={s.select_icon}/>
            </div>

            <div className={`${s.body} ${isBodyVisible ? s.bodyVisible : ""}`}>
                {props.sortSelect.map((item)=>{

                    return <div onClick={()=>{setNewCurrentItem(item.id)}} className={s.item} id={item.id+item.title}>{item.title}</div>
                })}
            </div>
        </div>
    </div>
}

export default SortSelect;
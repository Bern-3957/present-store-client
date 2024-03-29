import React from "react";
import s from "./../Checkboxes.module.css";
import galochka from "./../../../../assets/icons/filter/galochka.svg"

const Package = (props) => {
    const changeCheckbox = (checkbox_id) => {
        props.setPackagesCheckbox(checkbox_id)
    }

    return (
        <div className={s.pr_catalog_filter_item}>
            <div className={s.pr_catalog_filter_item_title}>упаковка</div>
            <div className={s.pr_consists}>
                <div className={s.pr_inner}>
                    {props.checkboxes.map((checkbox) => {
                        return  <label className={s.pr_item}>
                            <input onChange={()=> changeCheckbox(checkbox.id)} type="checkbox" className={s.pr_checkbox} id={checkbox.id+checkbox.title} />
                            <span className={s.pr_custom_checkbox}>{props.activeFilters.packages.includes(checkbox.id) ?(<img className={s.pr_custom_img} src={galochka} alt="1"/>):''}</span>
                            <label htmlFor={checkbox.id+checkbox.title} className={s.pr_label}>{checkbox.title}</label>
                        </label>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Package;
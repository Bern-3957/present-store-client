import React from "react";
import s from "./../Checkboxes.module.css";
import galochka from "./../../../../assets/icons/filter/galochka.svg"

const Consists = (props) => {
    const changeCheckbox = (checkbox_id) => {
        props.setPresentConsistsCheckbox(checkbox_id)
        console.log('Changing checkbox:', checkbox_id);
    }
    const [edible, noEdible] = props.checkboxes
    return (
        <div className={s.pr_catalog_filter_item}>
            <div className={s.pr_catalog_filter_item_title}>состав подарков </div>
            <div className={s.pr_consists}>
                <div className={s.pr_inner}>
                    {/*{props.checkboxes.map((checkbox) => {*/}
                    {/*    return  <label className={s.pr_item}>*/}
                    {/*                <input onChange={()=>{changeCheckbox(checkbox.id)}} type="checkbox" className={s.pr_checkbox} id={checkbox.id+checkbox.title} />*/}
                    {/*                <span className={s.pr_custom_checkbox}>{props.activeEdible && (<img className={s.pr_custom_img} src={galochka} alt="1"/>) }</span>*/}
                    {/*                <label  htmlFor={checkbox.id+checkbox.title} className={s.pr_label}>{checkbox.title}</label>*/}
                    {/*            </label>*/}
                    {/*})}*/}
                    <label className={s.pr_item}>
                        <input onChange={()=>{changeCheckbox(edible.id)}} type="checkbox" className={s.pr_checkbox} id={edible.id+edible.title} />
                        <span className={s.pr_custom_checkbox}>{props.activeEdible && (<img className={s.pr_custom_img} src={galochka} alt="1"/>) }</span>
                        <label  htmlFor={edible.id+edible.title} className={s.pr_label}>{edible.title}</label>
                    </label>
                    <label className={s.pr_item}>
                        <input onChange={()=>{changeCheckbox(noEdible.id)}} type="checkbox" className={s.pr_checkbox} id={noEdible.id+noEdible.title} />
                        <span className={s.pr_custom_checkbox}>{props.activeEdible===false && (<img className={s.pr_custom_img} src={galochka} alt="1"/>) }</span>
                        <label  htmlFor={noEdible.id+noEdible.title} className={s.pr_label}>{noEdible.title}</label>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Consists;

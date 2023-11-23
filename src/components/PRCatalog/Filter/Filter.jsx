import React from "react";
import s from "./Filter.module.css"
import Categories from "./Categories/Categories";
import Consists from "./Consists/Consists";
import Purposes from "./Purposes/Purposes";
import Package from "./Paсkage/Package";
import {setPackagesCheckboxAC, setPurposesCheckboxAC} from "../../../redux/prCatalogReducer";

const Filter = (props) => {
    return (<div className={s.pr_catalog_filter}>
            <h2 className={s.pr_catalog_filter_title}>Фильтр</h2>
            <div className={s.pr_catalog_filter_inner}>
                <a href="#" className={s.pr_catalog_filter_clean}>Очистить фильтр</a>
                <Categories categories={props.categories} setCurrentCategory={props.setCurrentCategory}/>
                <Consists checkboxes={props.pr_consists} setPresentConsistsCheckbox={props.setPresentConsistsCheckbox}/>
                <Purposes checkboxes={props.purposes} setPurposesCheckbox={props.setPurposesCheckbox}/>
                <Package checkboxes={props.packages} setPackagesCheckbox={props.setPackagesCheckbox}/>
            </div>
        </div>
    )
}

export default Filter
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
                <Categories categories={props.categories} setCurrentCategory={props.setCurrentCategory} activeFilters={props.activeFilters}/>
                <Consists checkboxes={props.pr_consists} setPresentConsistsCheckbox={props.setPresentConsistsCheckbox} activeEdible={props.activeEdible}/>
                <Purposes checkboxes={props.purposes} setPurposesCheckbox={props.setPurposesCheckbox} activeFilters={props.activeFilters}/>
                <Package checkboxes={props.packages} setPackagesCheckbox={props.setPackagesCheckbox} activeFilters={props.activeFilters}/>
            </div>
        </div>
    )
}

export default Filter
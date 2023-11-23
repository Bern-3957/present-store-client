import React, {useState} from "react";
import s from "./Categories.module.css"
import otkrivashka from "../../../../assets/icons/filter/Otkrivashka.svg";
import {Link, useParams} from "react-router-dom";
import {ROUTES} from "../../../../utils/routes";

const Categories = (props) => {
    const [subCatArrow, setSubCatArrow] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const otkrivashka_clicked = () => {
        setIsActive(!isActive)
    }
    console.log(useParams())
    return (<div className={s.pr_catalog_filter_item}>
            <div className={s.pr_catalog_filter_item_title}>Категория</div>
            <div className={s.pr_catalog_filter_category}>
                {/*<a className={`${s.pr_catalog_filter_category_item}`}>Все подарки</a>*/}
                {props.categories.map((category) => {
                    if (category.subcategories.length === 0) {
                        return <Link to={`${ROUTES.PRCATALOG}/:${category.slug}`} onClick={() => props.setCurrentCategory(category.id)} href="#" className={`${s.pr_catalog_filter_category_item} `}>{category.title}</Link>
                    } else {
                        return <div className={`${s.select} ${isActive ? s.is_active : ''}`}>
                            <div className={s.select_header}>
                                <span className={s.select_current}><Link to={`${ROUTES.PRCATALOG}/:${category.slug}`} onClick={() => props.setCurrentCategory(category.id)} className={`${s.pr_catalog_filter_category_item} `}>{category.title}</Link></span>
                                <img onClick={otkrivashka_clicked} src={otkrivashka} className={s.select_icon}/>
                            </div>

                            <div className={s.select_body}>
                                {category.subcategories.map((subcategory) => {
                                    return <a href="#" className={`${s.select_item}`}>{subcategory.title}</a>
                                })}
                            </div>
                        </div>
                    }
                })}

            </div>
        </div>)
}


export default Categories
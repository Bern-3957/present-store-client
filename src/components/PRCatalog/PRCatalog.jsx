import React from "react";
import s from "./PRCatalog.module.css"
import FilterContainer from "./Filter/FilterContainer";
import Products from "./Products/Products";

const PRCatalog = (props) => {
    return <div className={s.pr_catalog}>
        <div className="container">
            <div className={s.pr_catalog_inner}>
                <FilterContainer/>
                <Products/>
            </div>
        </div>
    </div>
}

export default PRCatalog;
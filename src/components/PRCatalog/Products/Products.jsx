import React from "react";
import s from "./Products.module.css"
import SortSelectContainer from "./Sort/SortSelectContainer";
import ProductContainer from "./Product/ProductContainer";
const Products = (props) => {
    return <div className={s.products}>
        <div className={s.products_title}>Каталог подарков</div>
        {/*<SortSelectContainer/>*/}
        <div className={s.products_inner}>
            <ProductContainer/>
        </div>
    </div>
}

export default Products;
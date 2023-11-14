import React from "react";
import s from './Catalog_child.module.css'
import Catalog_child_item from "./Catalog_child_item";


import item1 from "./../../../assets/images/catalog/1.jpeg"
import item2 from "./../../../assets/images/catalog/2.jpeg"
import item3 from "./../../../assets/images/catalog/3.jpeg"
import item4 from "./../../../assets/images/catalog/4.jpeg"
import item5 from "./../../../assets/images/catalog/5.jpeg"
import item6 from "./../../../assets/images/catalog/6.jpeg"
import item7 from "./../../../assets/images/catalog/7.jpeg"
import item8 from "./../../../assets/images/catalog/8.jpeg"
import item9 from "./../../../assets/images/catalog/9.jpeg"
import item10 from "./../../../assets/images/catalog/10.jpeg"
import item11 from "./../../../assets/images/catalog/11.jpeg"
import item12 from "./../../../assets/images/catalog/12.jpeg"
import item13 from "./../../../assets/images/catalog/13.jpeg"
import item14 from "./../../../assets/images/catalog/14.jpeg"

let catalog_child_data = [
    {title: 'Новый год', img: item1},
    {title: '8 марта', img: item2},
    {title: '23 февраля', img: item3},
    {title: 'день учителя', img: item4},
    {title: '1 сентября', img: item5},
    {title: 'день рождения', img: item6},
    {title: 'Ураза-байрам', img: item7},
    {title: 'день матери', img: item8},
    {title: 'рождение ребенка', img: item9},
    {title: 'подарки детям', img: item10},
    {title: 'для бани', img: item11},
    {title: 'для кухни', img: item12},
    {title: 'косметические наборы', img: item13},
    {title: 'в гости', img: item14},
]
const Catalog_child = (props) => {
    let catalogElements = catalog_child_data.map((item) => <Catalog_child_item title={item.title} img={item.img}/> )
    return (
        <div className={s.catalog_child}>
            <div className={s.catalog_child_inner}>
                {catalogElements}
                <div className={s.catalog_child_item_xl}>
                    <a href="#" className={s.catalog_child_item_xl_text}>Все подарки</a>
                </div>
            </div>
        </div>
    )
}

export default Catalog_child
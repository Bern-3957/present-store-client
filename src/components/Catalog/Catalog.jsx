import React from "react";
import s from './Catalog.module.css'
import Infoblock_inner from "../Infoblock/Infoblock_inner/Infoblock_inner";
import Catalog_child from "./Catalog_child/Catalog_child";


const Catalog = (props) => {
    return (<div className={s.catalog}>
        <div className="container">
            <h1 className={s.catalog_title}>Каталог подарков</h1>
            <Infoblock_inner/>
            <Catalog_child/>
            {/*<div className="catalog_child">*/}
            {/*    <div className="catalog_child_inner">*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/1.jpeg" %}" alt="1" class="catalog_child_item_img">*/}
            {/*            <a href="" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">Новый год</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/2.jpeg" %}" alt="2" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">8 марта</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/3.jpeg" %}" alt="3" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">23 февраля</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/4.jpeg" %}" alt="4" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">день учителя</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/5.jpeg" %}" alt="5" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">1 сентября</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/6.jpeg" %}" alt="6" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">день рождения</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/7.jpeg" %}" alt="7" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">Ураза-байрам</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/8.jpeg" %}" alt="8" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">день матери</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/9.jpeg" %}" alt="9" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">рождение ребенка</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/10.jpeg" %}" alt="10" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">подарки детям</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/11.jpeg" %}" alt="11" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">для бани</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/12.jpeg" %}" alt="12" class="catalog_child_item_img">*/}
            {/*            <a href="#" className="catalog_child_item_inner">*/}
            {/*                <div className="catalog_child_item_text">для кухни</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/13.jpeg" %}" alt="13 class="catalog_child_item_img">*/}
            {/*            <a href="#" class="catalog_child_item_inner">*/}
            {/*                <div class="catalog_child_item_text">косметические наборы</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div class="catalog_child_item">*/}
            {/*            <img src="{% static "products/img/catalog/14.jpeg" %}" alt="14" class="catalog_child_item_img">*/}
            {/*            <a href="#" class="catalog_child_item_inner">*/}
            {/*                <div class="catalog_child_item_text">в гости</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div class="catalog_child_item-xl">*/}
            {/*            <a href="{% url 'products:products_catalog' %}" class="catalog_child_item-xl_text">Все подарки</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>)
}


export default Catalog;
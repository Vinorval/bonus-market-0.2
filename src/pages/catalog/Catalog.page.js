import React from "react";
import Location from "../../components/location/Location";
import catalogArr from "../../utils/catalog";
import { useLocation } from "react-router";
import categoriesArr from "../../utils/categories";
import products from "../../utils/products";
import Product from "../../components/product/Product";

import tableMenu from '../../images/menu-table.svg';
import listMenu from '../../images/menu-list.svg';

import moreButton from '../../images/more.svg';

const CatalogPage = () => {
    const path = useLocation();
    const category = catalogArr.find(item => item.to === path.pathname.slice(10));
    const categorysArr = categoriesArr.find(item => item.name === category.name);
    const location = [ { link: "/", text: 'Главная ' }, { link: "/category", text: '/ Каталог ' }, { link: `/category/${category.to}`, text: `/ ${category.name} ` } ];
    const [startCard, setSartCard] = React.useState(8);
    const ProductCards = products.slice(0, startCard);
    const [isType, setType] = React.useState("list");

    function hideButton() {
        if ((products.length === ProductCards.length)) {
          return true
        } else {
          return false
        }
    }

    function handleMore() {
        if( window.innerWidth < 768 ) {
          return setSartCard(startCard + 5)
        } if (window.innerWidth >= 768) {
          return setSartCard(startCard + 12)
        }
    }

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">{category.name}</h2>
            <ul className="margin_none list-style_none category-list">
                {categorysArr.items.map((el, index) => (
                    <li key={index}>{el.name}</li>
                ))}
            </ul>
            <section className="products">
                <div className="products__displayed">
                    <button className="button margin_none padding_none background_none" onClick={() => setType("card")}>
                        <img src={tableMenu} alt="кнопка отображенния товаров в виде таблицы" />
                    </button>
                    <button className="button margin_none padding_none background_none" onClick={() => setType("list")}>
                        <img src={listMenu} alt="кнопка отображенния товаров в виде списка" />
                    </button>
                </div>
                <ul className={`products__list ${isType === "list" && "products__list_type_list"}`}>
                    {ProductCards.map((el) => (
                        <Product key={el._id} item={el} type={isType} />
                    ))}
                </ul>
                { !hideButton() && <button onClick={handleMore} className="button__more" >
                    <img src={moreButton} alt="button 'more'"/>
                    Показать ещё
                </button> }
            </section>
        </main>
    )
};

export default CatalogPage;
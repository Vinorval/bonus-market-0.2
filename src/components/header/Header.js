import React from "react";
import Logo from "../logo/Logo";
import { NavLink } from "react-router";
import LoupeIcon from "../../images/form-icons/loupe.svg";
import ComparisonIcon from "../../images/page-icons/chart.svg";
import FavouritesIcon from "../../images/page-icons/like.svg";
import BusketIcon from "../../images/page-icons/cart.svg";

import close from '../../images/close.svg';
import product from '../../images/products/milk/milk-day.jpg';

import Modal from '../modal/Modal';
import catalogArr from '../../utils/catalog';

const Header = () => {
    const [showModalCatalog, setShowModalCatalog ] = React.useState(false);
    const onClickCatalog = () => setShowModalCatalog(!showModalCatalog);

    const [showModalLikes, setShowModalLikes ] = React.useState(false);
    const onClickLikes = () => setShowModalLikes(!showModalLikes);

    return (
    <header className="header padding_limit_width background_color_blue">
        <Logo />
        <form className="search-form">
            <img alt="иконка лупы" src={LoupeIcon} className="search-form__icon" />
            <input className="search-form__input background_none margin_none padding_none" type="text" placeholder="Поиск по каталогу" />
        </form>
        <button onClick={() => onClickCatalog()} className="button button_color_yellow button_width_narrow margin_none padding_none">Каталог</button>
        <ul className="header-links margin_none padding_none">
            <NavLink to='comparison' className="header-link text-decoration">
                <img className="header-link__icon" alt="иконка страницы сравнения товаров" src={ComparisonIcon} />
                <p className="header-link__name margin_none">Сравнение товаров</p>
            </NavLink>
            <button onClick={() => onClickLikes()} className="header-link button background_none margin_none padding_none">
                <img className="header-links__icon" alt="иконка страницы избранное" src={FavouritesIcon} />
                <p className="header-link__name margin_none">Избранное</p>
            </button>
            <NavLink to='basket' className="header-link text-decoration">
                <img className="header-links__icon" alt="иконка страницы корзина" src={BusketIcon} />
                <p className="header-link__name margin_none">Корзина</p>
            </NavLink>
        </ul>
        <button className="button button_color_yellow button_width_narrow margin_none padding_none" ><NavLink className='text-decoration' to='/log-in'>Вход</NavLink></button>
        <Modal show={showModalCatalog} closePopup={onClickCatalog} type='catalog'>
            <h3 className="margin_none popup-catalog__title">Категории</h3>
            <ul className="margin_none list-style_none popup-catalog__list">{catalogArr.map((el, index) => <li key={index}><NavLink to={`category/${el.to}`} className="margin_none text-decoration">{el.name}</NavLink></li>)}</ul>
        </Modal>
        <Modal show={showModalLikes} closePopup={onClickLikes} type='likes'>
            <h3 className="margin_none">Избранное</h3>
            <ul className="margin_none padding_none likes-list">
                <li className="margin_none list-style_none like-item">
                    <img className="like-item__img" src={product} alt="product" />
                    <div className="like-item__info">
                        <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                        <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                        <button className="button like-item__basket button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                    </div>
                    <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                </li>
                <li className="margin_none list-style_none like-item">
                    <img className="like-item__img" src={product} alt="product" />
                    <div className="like-item__info">
                        <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                        <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                        <button className="button like-item__basket button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                    </div>
                    <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                </li>
            </ul>
        </Modal>
    </header>
)};

export default Header;
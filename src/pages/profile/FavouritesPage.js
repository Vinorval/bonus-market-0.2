import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesProfileArr } from "../../utils/navigationPage";
import close from "../../images/close.svg";
import product from "../../images/products/milk/milk-day.jpg";
import React from "react";
import Modal from "../../components/modal/Modal";


const FavouritesPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/profile", text: '/ Профиль ' }, { link: "/favourites", text: '/ Избранное ' }, ];
    const [ showModal, setShowModal ] = React.useState(true);
    const onClick = () => setShowModal(!showModal);


    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Избранное</h2>
            <Nav navArr={navPagesProfileArr} />
            <section className="info-block">
                <ul className="margin_none padding_none likes-list">
                    <li className="margin_none list-style_none like-item">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info">
                            <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                            <button className="like-item__basket button button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                        </div>
                         <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                    </li>
                </ul>
            </section>
            <Modal show={showModal} closePopup={onClick} type='order'>
                    <div className="order-popup">
                    <h3 className="margin_none">Выполнен</h3>
                    <div className="order-popup__date">
                        <p className="margin_none">Создан 2.10 в 13:44</p>
                        <p className="margin_none">Заказ № 1057488</p>
                    </div>
                    <h3 className="margin_none">7 товаров на сумму: 4473 ₽</h3>
                    <ul className="margin_none padding_none likes-list">
                    <li className="margin_none list-style_none like-item like-item_type_popup">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info like-item__info_type_popup">
                            <h3 className="margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">1 шт</p>
                        </div>
                        <h3 className="margin_none">15.20 руб.</h3>
                    </li>
                    <li className="margin_none list-style_none like-item like-item_type_popup">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info like-item__info_type_popup">
                            <h3 className="margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">1 шт</p>
                        </div>
                        <p className="margin_none">15.20 руб.</p>
                    </li>
                </ul>
                <div className="order-popup__date">
                        <h3 className="margin_none">Оплата</h3>
                        <p className="margin_none">Картой курьеру</p>
                    </div>
                    <div className="order-popup__date">
                        <h3 className="margin_none">Адрес доставки</h3>
                        <p className="margin_none">г. Якутск пр-кт Ленина д.36</p>
                    </div>
                    </div>
                </Modal>
        </main>
    )
};

export default FavouritesPage;
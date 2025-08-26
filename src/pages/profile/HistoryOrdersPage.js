import React from "react";
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesProfileArr } from "../../utils/navigationPage";
import Modal from "../../components/modal/Modal";
import buttonOrder from "../../images/to-show.svg";

const HistoryOrdersPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/profile", text: '/ Профиль ' }, { link: "/orders", text: '/ История заказов ' }, ];
    const [ showModal, setShowModal ] = React.useState(false);
    const onClickClose = () => setShowModal(!showModal);

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">История заказов</h2>
            <Nav navArr={navPagesProfileArr} />
            <section className="info-block">
                <ul className="margin_none padding_none order-list">
                    <li className="margin_none list-style_none order">
                        <div>
                            <h4 className="margin_none">Заказ № 1057488</h4>
                            <p className="margin_none">02.10.2022. в 13:44</p>
                            <p className="margin_none">6 товаров на сумму: 4 473 ₽</p>
                        </div>
                        <button className="button button_color_yellow button_width_very-wide margin_none padding_none" >Выполнено <img src={buttonOrder} alt="кнопка посмотреть заказ" /></button>
                    </li>
                </ul>
            </section>
        </main>
    )
};

export default HistoryOrdersPage;
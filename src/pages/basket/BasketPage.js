import React from "react";
import StepImg from "../../images/basket-step/one.svg";
import product from "../../images/products/milk/milk-day.jpg";
import close from "../../images/close.svg";
import like from "../../images/page-icons/like.svg";

const BasketPage = () => {
    return (
        <main className="page page__basket" >
            <div className="step">
                <img className="step__img" src={StepImg} alt="svg icon step-first"  />
                <div className="step__name-block" >
                    <p className="margin_none" >Корзина</p>
                    <p className="margin_none" >Контакты и доставка</p>
                    <p className="margin_none" >Оплата</p>
                </div>
                </div>
                <h2 className="margin_none justify-self_center " >Корзина</h2>
                <ul className="margin_auto padding_none list-style_none" >
                    <li className="margin_none list-style_none like-item like-item_position_basket">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info">
                            <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                            <div className="counter">
                                <button className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                                <p className="margin_none counter__num">1</p>
                                <button className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                            </div>
                        </div>
                        <div className="butons-basket" >
                            <button className="button background_none margin_none padding_none"><img src={like} alt="button-like" /></button>
                            <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                        </div>
                    </li>
                </ul>
                <label className="form-basket margin_auto">
                    <input type="text" name="promo" className="form-auth__input" />
                    <button className="button button_color_yellow button_width_narrow margin_none padding_none">Применить</button>
                </label>
                <div className="result margin_auto">
                    <div >
                        <h2 className="margin_none">Итого: 465.80 руб.</h2>
                        <p className="margin_none">Без учета стоимости доставки</p>
                    </div>
                    <button className="button button_color_yellow button_width_narrow margin_none padding_none">Купить в один клик</button>
                    <button className="button button_color_yellow button_width_narrow margin_none padding_none">Оформить заказ</button>
                </div>
           
        </main>
    )
};

export default BasketPage;
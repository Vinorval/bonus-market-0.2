import React from "react";
import StepImg from "../../images/basket-step/one.svg";
import product from "../../images/products/milk/milk-day.jpg";
import close from "../../images/close.svg";
import like from "../../images/page-icons/like.svg";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductSuccess } from "../../services/actions/products";
import { NavLink } from "react-router";

const BasketPage = () => {
    const dispatch = useDispatch();
    const order = useSelector( store => store.product.order );
    const [isResult, setResult] = React.useState(0);

    const returnSumm = () => {
        let sum = 0;
        order.forEach(element => {
            sum = sum + element.price * (element.count ? element.count : 1);
        });
        return setResult(sum.toLocaleString('ru-Ru'));
    }

    const deleteProduct = (product) => { //удаление товара по названию
        dispatch(deleteProductSuccess(product._id));
        console.log(order);
    };

    React.useEffect(() => {
        returnSumm();
    }, [order])

    const returnProducts = () => {
        return order ? order.map((item) => {
            return (
                <li className="margin_none list-style_none like-item like-item_position_basket">
                    <img className="like-item__img" src={product} alt="product" />
                    <div className="like-item__info">
                        <h3 className="like-item__title margin_none">{item.name}</h3>
                        <p className="margin_none">Цена за штуку<br />{item.price} руб.</p>
                        <div className="counter">
                            <button className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                            <p className="margin_none counter__num">{item.count}</p>
                            <button className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                        </div>
                    </div>
                    <div className="butons-basket" >
                        <button className="button background_none margin_none padding_none"><img src={like} alt="button-like" /></button>
                        <button onClick={() => deleteProduct(item)} className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                    </div>
                </li>
            )
        }) : 'нет товаров'
    }

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
                    {returnProducts()}
                </ul>
                <label className="form-basket margin_auto">
                    <input type="text" name="promo" className="form-auth__input" />
                    <button className="button button_color_yellow button_width_wide margin_none padding_none">Применить</button>
                </label>
                <div className="result margin_auto">
                    <div >
                        <h2 className="margin_none">Итого: {isResult} руб.</h2>
                        <p className="margin_none">Без учета стоимости доставки</p>
                    </div>
                    <button className="button button_color_yellow button_width_very-wide margin_none padding_none">Купить в один клик</button>
                    <NavLink to='/order-forma' className='text-decoration_none'><button className="button button_color_yellow button_width_very-wide margin_none padding_none">Оформить заказ</button></NavLink>
                </div>
           
        </main>
    )
};

export default BasketPage;
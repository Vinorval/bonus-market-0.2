import StepImg from "../../images/basket-step/three.svg";
import React from "react";
import { NavLink } from "react-router";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { postOrderSuccess } from "../../services/actions/products";

const PayOrderPage = () => {
    const dispatch = useDispatch();
    const [ showModal, setShowModal ] = React.useState(false);
    const order = useSelector( store => store.product.order );
    const onClick = () => {
        dispatch(postOrderSuccess(order));
        setShowModal(!showModal);
    };

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
            <h2 className="margin_none justify-self_center" >Оплата</h2>
            <div className="pay-block-button">
                <button onClick={() => onClick()} className="button button_color_yellow margin_none padding_none">Оплатить через ЯндексДеньги</button>
                <button onClick={() => onClick()} className="button button_color_orange margin_none padding_none">Оплатить через Qiwi</button>
                <button onClick={() => onClick()} className="button button_color_blue margin_none padding_none">Оплатить через PayPal</button>
                <button onClick={() => onClick()} className="button button_color_gray margin_none padding_none">Оплатить банковской картой онлайн</button>
                <button onClick={() => onClick()} className="button button_color_gray margin_none padding_none">Оплатить банковской картой курьеру</button>
                <button onClick={() => onClick()} className="button button_color_gray margin_none padding_none">Оплатить наличными курьеру</button>
            </div>
            <Modal show={showModal} closePopup={onClick} type='success-pay'>
                <h3 className="margin_none">Заказ сделан!</h3>
                <p className="margin_none">Наш оператор вскоре свяжется с вами для уточнения времени доставки</p>
                <NavLink to='/' className="margin_none text-decoration"><h3>Вернуться на главную</h3></NavLink>
            </Modal>
        </main>
    ); 
};

export default PayOrderPage;
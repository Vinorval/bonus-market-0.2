import StepImg from "../../images/basket-step/three.svg";

const PayOrderPage = () => {
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
                <button className="button button_color_yellow margin_none padding_none">Оплатить через ЯндексДеньги</button>
                <button className="button button_color_orange margin_none padding_none">Оплатить через Qiwi</button>
                <button className="button button_color_blue margin_none padding_none">Оплатить через PayPal</button>
                <button className="button button_color_gray margin_none padding_none">Оплатить банковской картой онлайн</button>
                <button className="button button_color_gray margin_none padding_none">Оплатить банковской картой курьеру</button>
                <button className="button button_color_gray margin_none padding_none">Оплатить наличными курьеру</button>
            </div>
        </main>
    ); 
};

export default PayOrderPage;
import AuthForm from "../../components/authForm/AuthFrom";
import StepImg from "../../images/basket-step/two.svg";

const OrderFormPage = () => {
    const formObject = {
        title: 'Контакты и доставка',
        inputArr: [
            { name: 'surname', type: 'text', placeholder: 'Фамилия' },
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'phone', type: 'phone', placeholder: 'Номер телефона' },
            { name: 'city', type: 'text', placeholder: 'Город' },
            { name: 'adress', type: 'text', placeholder: 'Адрес доставки' }
        ],
        button: 'Перейти к оплате',
        linksArr: [
            { text: '', path: '', link: '' },
        ],
    };

    return (
        <main className="page page__basket">
            <div className="step">
                <img className="step__img" src={StepImg} alt="svg icon step-first"  />
                <div className="step__name-block" >
                    <p className="margin_none" >Корзина</p>
                    <p className="margin_none" >Контакты и доставка</p>
                    <p className="margin_none" >Оплата</p>
                </div>
            </div>
            <div className="margin_auto">
                <AuthForm 
                    title={formObject.title} 
                    inputArr={formObject.inputArr} 
                    button={formObject.button} 
                    linksArr={formObject.linksArr} 
                    link='/pay-order'
                />
            </div>
            
        </main>
    )
};

export default OrderFormPage;
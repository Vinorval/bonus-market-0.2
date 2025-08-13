import React from "react";
import AuthForm from "../../components/authForm/AuthFrom";
import Modal from "../../components/modal/Modal";

const LoginPage = () => {
    const formObject = {
        title: 'Вход',
        inputArr: [
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'password', type: 'password', placeholder: 'Пароль' }
        ],
        button: 'Войти',
        linksArr: [
            { text: 'Вы — новый пользователь?', path: '/sign-up', link: 'Зарегистрироваться' },
            { text: 'Забыли пароль?', path: '/forgot-password', link: 'Восстановить пароль' },
        ],
    };
    const [ showModal, setShowModal ] = React.useState(true);
    const onClick = () => setShowModal(!showModal);

    return (
        <main className="page__auth padding_limit_width">
            <AuthForm 
                title={formObject.title} 
                inputArr={formObject.inputArr} 
                button={formObject.button} 
                linksArr={formObject.linksArr} 
            />
            <Modal show={!showModal} closePopup={onClick} type='warning'>
                <h3 className="margin_none">Просьба не вносить настоящие данные.</h3>
                <p className="margin_none">Данный сайт - дэмо. Он работает без сервера, а все данные сохраняются в кэше вашего браузера.</p>
            </Modal>
            <Modal show={showModal} closePopup={onClick} type='success-pay'>
                <h3 className="margin_none">Заказ сделан!</h3>
                <p className="margin_none">Наш оператор вскоре свяжется с вами для уточнения времени доставки</p>
            </Modal>
        </main>
    )
};

export default LoginPage;
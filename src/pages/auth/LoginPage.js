import AuthForm from "../../components/authForm/AuthFrom";

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
            { text: 'Забыли пароль?', path: 'forgot-password', link: 'Восстановить пароль' },
        ],
    };

    return (
        <main className="page__auth padding_limit_width">
            <AuthForm 
                title={formObject.title} 
                inputArr={formObject.inputArr} 
                button={formObject.button} 
                linksArr={formObject.linksArr} 
            />
        </main>
    )
};

export default LoginPage;
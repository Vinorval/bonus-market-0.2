import AuthForm from "../../components/authForm/AuthFrom";

const ForgotPasswordPage = () => {
    const formObject = {
        title: 'Восстановление пароля',
        inputArr: [
            { name: 'email', type: 'email', placeholder: 'Email' },
        ],
        button: 'Восстановить',
        linksArr: [
            { text: 'Вспомнили пароль?', path: '/sign-up', link: 'Войти' },
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

export default ForgotPasswordPage;
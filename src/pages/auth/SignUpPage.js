import AuthForm from "../../components/authForm/AuthFrom";

const SignUpPage = () => {
    const formObject = {
        title: 'Регистрация',
        inputArr: [
            { name: 'surname', type: 'text', placeholder: 'Фамилия' },
            { name: 'email', type: 'email', placeholder: 'Email' },
            { name: 'password', type: 'password', placeholder: 'Пароль' },
            { name: 'repeat_password', type: 'password', placeholder: 'Повторите пароль' }
        ],
        button: 'Зарегистрироваться',
        linksArr: [
            { text: 'Уже зарегистрированы?', path: '/log-in', link: 'Войти' },
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

export default SignUpPage;
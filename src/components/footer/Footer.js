import Logo from "../logo/Logo";
import Socials from "../socials/Socials";
import navigationLinks from "../../utils/navigationLinks";
import paymentMethodsArr from "../../utils/payment";
import BlockCallBack from "../blockCallBack/BlockCallBack";


const Footer = () => {
    return (
        <footer className="footer padding_limit_width background_color_blue">
            <Logo />
            <div className="contacts" >
                <Socials />
                <BlockCallBack />
                <p className="contacts__email">guli.iva@yandex.ru</p>
            </div>
            <nav className="navigation" >
                <h4 className="navigation__title" >О нас:</h4>
                <ul className="navigation__list navigation__list_position_footer margin_none padding_none" >
                    {navigationLinks.map((el) => (<li className="navigation__link" >{el.name}</li>))}
                </ul>
            </nav>
            <div className="payment-methods">
                <h4 className="payment-methods__title">Способы оплаты:</h4>
                <ul className="payment-methods__list margin_none padding_none">{paymentMethodsArr.map((el) => (
                    <li className="payment-method">
                        <img src={el.img} alt={`изображение способа оплаты ${el.name}`} />
                    </li>))}
                </ul>
            </div>
            <form className="mailing-form">
                <h4 className="mailing-form__title">Подписаться на рассылку</h4>
                <input type="email" placeholder="Ваша электронная почта" className="mailing-form__input" />
                <button className="mailing-form__button button_color_yellow button_width_narrow margin_none padding_none" >Подписаться</button>
            </form>
        </footer>
)};

export default Footer;
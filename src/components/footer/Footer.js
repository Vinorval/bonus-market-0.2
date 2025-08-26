import Logo from "../logo/Logo";
import Socials from "../socials/Socials";
import navigationLinks from "../../utils/navigationLinks";
import paymentMethodsArr from "../../utils/payment";
import BlockCallBack from "../blockCallBack/BlockCallBack";
import { NavLink } from "react-router";


const Footer = () => {
    return (
        <footer className="footer padding_limit_width background_color_blue">
            <Logo />
            <div className="contacts" >
                <Socials />
                <BlockCallBack position='footer' />
                <p className="contacts__email margin_none">guli.iva@yandex.ru</p>
            </div>
            <nav className="navigation" >
                <h4 className="navigation__title footer__title margin_none">О нас:</h4>
                <ul className="navigation__list navigation__list_position_footer margin_none padding_none" >
                    {navigationLinks.map((el, index) => (
                        <li key={index} className="navigation__link" >
                            <NavLink className="text-decoration" to={el.link}>{el.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="payment-methods">
                <h4 className="payment-methods__title footer__title margin_none">Способы оплаты:</h4>
                <ul className="payment-methods__list margin_none padding_none">{paymentMethodsArr.map((el) => (
                    <li className="payment-method">
                        <img src={el.img} alt={`изображение способа оплаты ${el.name}`} />
                    </li>))}
                </ul>
            </div>
            <form className="mailing-form">
                <h4 className="mailing-form__title footer__title margin_none">Подписаться на рассылку</h4>
                <input type="email" placeholder="Ваша электронная почта" className="mailing-form__input margin_none" />
                <button className="mailing-form__button button_color_yellow button_width_wide margin_none padding_none" >Подписаться</button>
            </form>
        </footer>
)};

export default Footer;
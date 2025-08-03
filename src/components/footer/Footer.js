import Logo from "../logo/Logo";
import Socials from "../socials/Socials";

const Footer = () => {
    return (
        <footer className="footer padding_limit_width background_color_blue">
            <Logo />
            <div className="contacts" >
                <Socials />
                <div className="block-call-back" >
                    <p className="block-call-back__number margin_none" >924-565-9456</p>
                    <button className="block-call-back__button margin_none padding_none background_none" >Заказать обратный звонок</button>
                 </div>
                 <p className="contacts__email">guli.iva@yandex.ru</p>
            </div>
        </footer>
)};

export default Footer;
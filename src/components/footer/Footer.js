import Logo from "../logo/Logo";
import Socials from "../socials/Socials";
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
        </footer>
)};

export default Footer;
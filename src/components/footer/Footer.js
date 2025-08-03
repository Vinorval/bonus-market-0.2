import Logo from "../logo/Logo";
import socialsArr from "../../utils/socials";

const Footer = () => {
    return (
        <footer className="footer padding_limit_width background_color_blue">
            <Logo />
            <div className="contacts" >
                <div className="socials">
                    <h4 className="socials__title">Мы в социальных сетях:</h4>
                    <ul className="socials__list" >{socialsArr.map((el) => (
                        <li className="socials__social">
                            <a href={el.link}>
                                <img src={el.img} alt={`Логотип социальной сети ${el.name}`} />
                            </a>
                        </li>))}
                    </ul>
                </div>
                <div className="block-call-back" >
                    <p className="block-call-back__number margin_none" >924-565-9456</p>
                    <button className="block-call-back__button margin_none padding_none background_none" >Заказать обратный звонок</button>
                 </div>
                 <p className="contacts__email">guli.iva@yandex.ru</p>
            </div>
        </footer>
)};

export default Footer;
import Logo from "../logo/Logo";

import LoupeIcon from "../../images/form-icons/loupe.svg";
import ComparisonIcon from "../../images/page-icons/chart.svg";
import FavouritesIcon from "../../images/page-icons/like.svg";
import BusketIcon from "../../images/page-icons/cart.svg";

const Header = () => {
    return (
    <header className="header padding_limit_width background_color_blue">
        <Logo />
        <button className="button button_color_yellow button_width_narrow margin_none padding_none">Каталог</button>
        <form className="search-form">
            <img alt="иконка лупы" src={LoupeIcon} className="search-form__icon" />
            <input className="search-form__input background_none margin_none padding_none" type="text" placeholder="Поиск по каталогу" />
        </form>
        <ul className="header-links margin_none padding_none">
            <li className="header-link">
                <img className="header-link__icon" alt="иконка страницы сравнения товаров" src={ComparisonIcon} />
                <p className="header-link__name margin_none">Сравнение товаров</p>
            </li>
            <li className="header-link">
                <img className="header-links__icon" alt="иконка страницы избранное" src={FavouritesIcon} />
                <p className="header-link__name margin_none">Избранное</p>
            </li>
            <li className="header-link">
                <img className="header-links__icon" alt="иконка страницы корзина" src={BusketIcon} />
                <p className="header-link__name margin_none">Корзина</p>
            </li>
        </ul>
        <button className="button button_color_yellow button_width_narrow margin_none padding_none" >Вход</button>
    </header>
)};

export default Header;
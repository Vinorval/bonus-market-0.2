import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesProfileArr } from "../../utils/navigationPage";
import close from "../../images/close.svg";
import product from "../../images/products/milk/milk-day.jpg";



const FavouritesPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/profile", text: '/ Профиль ' }, { link: "/favourites", text: '/ Избранное ' }, ];


    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Избранное</h2>
            <Nav navArr={navPagesProfileArr} />
            <section className="info-block">
                <ul className="margin_none padding_none likes-list">
                    <li className="margin_none list-style_none like-item">
                        <img className="like-item__img" src={product} alt="product" />
                        <div className="like-item__info">
                            <h3 className="like-item__title margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                            <p className="margin_none">Цена за штуку<br />15.20 руб.</p>
                            <button className="like-item__basket button button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                        </div>
                         <button className="button background_none like-item__button" ><img src={close} alt="button-close" /></button>
                    </li>
                </ul>
            </section>
        </main>
    )
};

export default FavouritesPage;
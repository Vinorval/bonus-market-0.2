import { NavLink } from "react-router";
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";
import { newsArr } from "../../utils/promoAndNews";

const NewsListPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/news-list", text: '/ Новости ' } ];

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Новости</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none info-block__title_width_full">Все новости</h3>
                </div>
                <ul className="margin_none padding_none news-list">
                    {newsArr.map((el) => (
                        <li key={el.id} className="margin_none list-style_none news-card">
                            <img src={el.img} alt={el.name} />
                            <div className="news-card__info">
                                <p className="margin_none">{el.name}</p>
                                <span>{el.date}</span>
                                <p className="margin_none">{el.description}</p>
                                <NavLink className="news-card__info text-decoration" to={el.id}>
                                    <button className="news-card__button button_color_yellow button_width_wide margin_none padding_none">Подробнее</button>
                                </NavLink>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
};

export default NewsListPage;
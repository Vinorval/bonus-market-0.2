import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";

import plombir from "../../images/promotions/plombir.jpg";

const PromotionsPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/promotions", text: '/ Акции ' } ];

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">Акции</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none info-block__title_width_full">Все акции</h3>
                </div>
                <ul className="margin_none padding_none news-list">
                    <li className="margin_none list-style_none news-card">
                        <img src={plombir} alt="" />
                        <div className="news-card__info">
                            <p className="margin_none">Новое поступление</p>
                            <span>05.04.2020</span>
                            <p className="margin_none">Знаменитый газированный напиток Dr Pepper производится корпорацией Dr Pepper Snapple Group Company (бывшее название компании – Cadbury Schweppes Americas Beverages). Помимо самого своего известного бренда компания выпускает и другие газированные и негазированные напитки, чаи, миксы, даже пиво. Под этой маркой выпускается Schweppes, A&W Root Beer, Hawaiian Punch, Motts. Основной рынок сбыта — страны Северной Америки.</p>
                            <button className="news-card__button button_color_yellow button_width_narrow margin_none padding_none">Подробнее</button>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
};

export default PromotionsPage;
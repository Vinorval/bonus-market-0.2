import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";
import { newsArr } from "../../utils/promoAndNews";
import { useLocation } from "react-router";

const NewsPage = () => {
    const path = useLocation();
    const item = newsArr.find(item => item.id === path.pathname.slice(-3));
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' },{ link: "/news-list", text: '/ Новости ' }, { link: `/news-list/${item.id}`, text: `/ ${item.name} ` } ];

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">{item.name}</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block news-card">
                <img src={item.img} alt={item.name} />
                <div className="news-card__info">
                    <span>{item.date}</span>
                    <p className="margin_none">{item.description}</p>
                </div>
            </section>
        </main>
    )
};

export default NewsPage;
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";
import brendsArr from "../../utils/brends";
import { useLocation } from "react-router";

const BrendPage = () => {
    const path = useLocation();
    const item = brendsArr.find(item => item.id === path.pathname.slice(-3));
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/brends", text: '/ Бренды ' }, { link: `/brends/${item.id}`, text: `/ ${item.name} ` } ];

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">{item.name}</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block brend-card">
                <div className="info-block__brend"><img src={item.img} alt={item.name} /></div>
                <div className="news-card__info">{item.description.map((el) => (<p className="margin_none">{el}</p>))}</div>
            </section>
        </main>
    )
};

export default BrendPage;
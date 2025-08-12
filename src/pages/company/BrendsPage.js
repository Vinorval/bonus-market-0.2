import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";
import brendsArr from "../../utils/brends";
import { NavLink } from "react-router";

const BrendsPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/brends", text: '/ Бренды ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Бренды</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <h3 className="info-block__title margin_none">В нашем интернет-магазине представлена только настоящая продукция популярных брендов. Мы гарантируем 100% процентное качество товара, если докажите обратное — вернем деньги.</h3>
                <ul className="info-block__brends margin_none padding_none">
                    {brendsArr.map((el) => (
                        <li key={el.id} className="info-block__brend">
                            <NavLink to={el.id}>
                                <img src={el.img} alt={`бренд - ${el.name}`} />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
};

export default BrendsPage;
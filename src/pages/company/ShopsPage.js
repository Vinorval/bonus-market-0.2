import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";

const ShopsPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/shops", text: '/ Наши магазины ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Наши магазины</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <h3 className="info-block__title margin_none info-block__title_width_full"> </h3>
            </section>
        </main>
    )
};

export default ShopsPage;
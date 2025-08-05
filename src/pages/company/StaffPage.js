import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";

const StaffPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' }, { link: "/staff", text: '/ Сотрудники ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">О компании</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <h3 className="info-block__title margin_none info-block__title_width_full">Наши сотрудники — это наша гордость. Мы постоянно работаем вместе над очень сложными задачами.</h3>
            </section>
        </main>
    )
};

export default StaffPage;
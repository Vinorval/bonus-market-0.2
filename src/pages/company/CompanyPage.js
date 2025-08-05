import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesCompanyArr } from "../../utils/navigationPage";

import Bonus from "../../images/logo/bonus.svg";

const CompanyPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ О компании ' } ];

    return (
        <main className="page padding_limit_width">
            <Location path={location} />
            <h2 className="page__title margin_none">О компании</h2>
            <Nav navArr={navPagesCompanyArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none info-block__title_width_full">Заказать продукты домой или в офис - теперь для этого есть Бонусмаркет.рф</h3>
                    <p className="margin_none"> Бонусмаркет - это возможность купить продукты, не выходя из дома. Наш ассортимент продуктов просто огромен и расширяется с каждым днем, поэтому мы можем удовлетворить запросы даже самых требовательных клиентов.</p>
                    <img src={Bonus} alt="Эмблема магазина" />
                </div>
                <div className="info-block__basic info-block__basic_background_active">
                    <h3 className="info-block__title margin_none">Для чего это нужно?</h3>
                    <p className="margin_none">Бонусмаркет помогает людям проявлять заботу, экономя время – вы можете купить продукты питания себе или сделать заказ продуктов своим родителям. Вам не надо беспокоить друзей если вы приболели, вам не надо просить соседей или близких посидеть с детьми, чтобы сбегать в магазин и купить продукты. Теперь не надо таскать тяжести или выходить из дома в промозглую погоду! Чтобы сделать заказ продуктов через интернет магазин достаточно всего 10 минут.</p>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Чем Бонусмаркет.рф лучше?</h3>
                    <p className="margin_none">Интернет-магазинов сейчас довольно много, но мы не похожи ни на один из них. Наши главные отличия состоят из 3-х пунктов:</p>
                    <ul className="margin_none">
                        <li className="margin_none">Собственная Доставка</li>
                        <li className="margin_none">Реальное Качество</li>
                        <li className="margin_none">Большой ассортимент продуктов</li>
                    </ul>
                </div>
            </section>
        </main>
    )
};

export default CompanyPage;
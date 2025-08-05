import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesShopArr } from "../../utils/navigationPage";

import Bonus from "../../images/logo/bonus.svg";

const ShopPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/shop", text: '/ Интернет-магазин ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Интернет-магазин</h2>
            <Nav navArr={navPagesShopArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <p className="margin_none">Наш интернет-магазин начал свою работу в 2018 году, за это время мы приобрели множество довольных клиентов, наша работа осуществляется качественно и в срок, мы стараемся для своих клиентов!</p>
                    <p className="margin_none">Интернет — магазин приглашает Вас выбрать и купить понравившийся вам товар по выгодной цене! На сайте представлены товары известных мировых производителей. Заказать понравившийся товар можно круглосуточно, что, несомненно, очень удобно для большинства наших клиентов.</p>
                    <p className="margin_none">В нашем интернет — магазине товар может приобрести как частное лицо, так и организация (юридическое лицо). Желаем приятного выбора и удачной покупки!</p>
                    <img className="info-block__title_hight_full" src={Bonus} alt="Эмблема магазина" />
                </div>
            </section>
        </main>
    )
};

export default ShopPage;
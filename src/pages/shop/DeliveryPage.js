import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesShopArr } from "../../utils/navigationPage";

const DeliveryPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/shop", text: '/ Интернет-магазин ' }, { link: "/delivery", text: '/ Доставка ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Доставка</h2>
            <Nav navArr={navPagesShopArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Условия доставки:</h3>
                    <ul className="margin_none">
                        <li className="margin_none">Хотя подача заявок осуществляется круглосуточно, служба доставки имеет определенный режим работы, не доставляющий проблем нашим покупателям.</li>
                        <li className="margin_none">Заказ, сделанный до 17 часов будет доставлен на следующий день.</li>
                        <li className="margin_none">Заказ, сделанный после 17 часов будет доставлен через день.</li>
                        <li className="margin_none">Минимальная сумма заказа — 2000 рублей.</li>
                    </ul>
                    <div className="info-block__basic info-block__basic_background_active">
                        <p className="margin_none">Доставка продуктов на дом производится в следующие интервалы времени:</p>
                        <p className="margin_none">C 10 до 13 часов. <br />С 13 до 16 часов. <br />С 16 до 19 часов.</p>
                    </div>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Способы доставки:</h3>
                    <ul className="margin_none">
                        <li className="margin_none">При заказе от 5000 рублей — доставка в черте города до подъезда бесплатно.</li>
                        <li className="margin_none">Доставка до подъезда по центру города – бесплатно. Центр разграничен следующими улицами; Октябрьская, Кирова, пр. Ленина до к/т «Лена», Орджоникидзе, Дзержинского до «Дом Быта», Ярославского, П.Алексеева до ул. Лермонтова, Чиряева, Губина, Лермонтова от ул. Дзержинского до ул. Петровского.</li>
                        <li className="margin_none">Доставка до подъезда в районы ДСК, Залог, Гимеин, Сайсары, Покровский тракт до 6 км – 150 рублей.</li>
                        <li className="margin_none">Доставка до подъезда в районы 17 квартал, аэропорт, ГРЭС – 200 рублей.</li>
                        <li className="margin_none">Доставка до подъезда в районы Племобьеденения (птицефабрика), ДСР, пос. Газовиков, Марха большая и малая — 300 рублей.</li>
                        <li className="margin_none">Доставка до подъезда в районы: Кирзавода, ул. Мелиораторов — 420 рублей.</li>
                        <li className="margin_none">Цена доставки в пригороды г. Якутска, оговаривается отдельно, но не дороже действующих тарифов служб такси.</li>
                        <li className="margin_none">Так же возможна доставка продуктов до квартиры из расчета 1 этаж – 25 рублей, при наличии лифта – оплачивается 1 и последний этаж.</li>
                    </ul>
                </div>
            </section>
        </main>
    )
};

export default DeliveryPage;
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesShopArr } from "../../utils/navigationPage";

const PayInfoPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/shop", text: '/ Интернет-магазин ' }, { link: "/pay", text: '/ Оплата ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Оплата</h2>
            <Nav navArr={navPagesShopArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Оплата наличными</h3>
                    <p className="margin_none">Заказ оплачивается наличными при получении в пункте выдачи или курьеру. Вместе с заказом выдается кассовый чек и товарный чек. При возврате товара укажите способ оплаты.</p>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none info-block__title_width_full">Оплата банковской картой</h3>
                    <p className="margin_none info-block__title_width_full">Вы можете оплатить банковской картой как на сайте так и непосредственно при доставке курьру. Принимаем к оплате банковские карты: Visa и MasterCard</p>
                    <div className="info-block__basic info-block__basic_background_active">
                        <h3 className="info-block__title margin_none">На сайте</h3>
                        <p className="margin_none">Заказ оплачивается банковской картой на сайте и в пунктах выдачи заказов. Оплата заказа происходит моментально. В случае возврата — комиссия нe взымается.</p>
                    </div>
                    <div className="info-block__basic info-block__basic_background_active">
                        <h3 className="info-block__title margin_none">При получении</h3>
                        <p className="margin_none">При оформлении заказа выберите способ оплаты «Наличный расчет». И выберите оплата картой. Хотим заметить, что не все службы доставки поддерживают такую услугу.</p>
                    </div>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Оплата электронными деньгами</h3>
                    <p className="margin_none">Так же мы принимаем оплату электронными деньгами, ниже перечислены все сервисы, через которые мы работаем. При возврате или отмене оплаты деньги можно вернуть только на этот же счет:</p>
                    <ul className="margin_none">
                        <li className="margin_none">Яндекс.Деньги</li>
                        <li className="margin_none">QIVI</li>
                        <li className="margin_none">PayPal</li>
                        <li className="margin_none">WebMoney</li>
                    </ul>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Банковский перевод</h3>
                    <p className="margin_none">Оплатите заказ через любой банк, действующий на территории России. Комиссия за перевод составляет 3-7%.Бланк банковского перевода вы можете получить, связавшись с нашими консультантами на сайте</p>
                </div>
            </section>
        </main>
    )
};

export default PayInfoPage;
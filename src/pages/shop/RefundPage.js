import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesShopArr } from "../../utils/navigationPage";

const RefundPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/shop", text: '/ Интернет-магазин ' }, { link: "/refund", text: '/ Возврат и обмен ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Возврат и обмен</h2>
            <Nav navArr={navPagesShopArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Условия возврата заказа</h3>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none info-block__title_width_full">1. Вы можете отказаться от заказа при получении бесплатно!</h3>
                    <p className="margin_none info-block__title_width_full">При получении заказа Вы можете отказаться от него полностью или его части, совершенно бесплатно, не заполняя никакие формы и не оплачивая никаких дополнительных платежей, включая доставку. Мы берем на себя этот риск, т.к. считаем, что основная причина отказа от покупки - качество товара, а это как раз наша забота.</p>
                    <div className="info-block__basic info-block__basic_background_active">
                        <h3 className="info-block__title margin_none">Оплата наличными или картой при получении</h3>
                        <p className="margin_none">Вы оплачиваете только ту часть заказа, которую решили оставить. Соответственно кассовый чек получаете только на ту сумму, которую оплатили.</p>
                    </div>
                    <div className="info-block__basic info-block__basic_background_active">
                        <h3 className="info-block__title margin_none">Оплата по карте на сайте</h3>
                        <p className="margin_none">В момент оплаты картой на сайте, мы только резервируем необходимую денежную сумму, поэтому в случае отказа от части заказа при получении, мы просто снимаем ту сумму, которую Вы реально потратили на покупки.</p>
                    </div>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">2. Условия возврата, если Вы получили и оплатили заказ.</h3>
                    <p className="margin_none">Возврат товаров после получения и оплаты производится в полном соответствии с законодательством РФ</p>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Возврат продовольственных товаров (продукты питания)</h3>
                    <p className="margin_none">Возврат продовольственных товаров может быть осуществлен только при условии их ненадлежащего качества - брак, истекший срок годности на момент приема товара, нарушенная герметичность упаковки.</p>
                    <div className="info-block__basic info-block__basic_background_active">
                        <p className="margin_none">Согласно ст. 503 ГК РФ покупатель, при обнаружении недостатков в продовольственном товаре, по своему выбору вправе потребовать замены такого товара товаром надлежащего качества или возврата уплаченной за товар стоимости. </p>
                    </div>
                </div>
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Возврат непродовольственных товаров</h3>
                    <p className="margin_none">Возврат непродовольственных товаров надлежащего качества может быть осуществлен в течение 14 дней с дня покупки товара.</p>
                    <div className="info-block__basic info-block__basic_background_active">
                        <p className="margin_none">Ст. 25 ФЗ «О защите прав потребителей» № 121-ФЗ от 03.06.2009 г. предусмотрено право потребителя обменивать непродовольственный товар надлежащего качества на аналогичный товар, исключая товары, упомянутые в перечне, утвержденном Правительством.</p>
                    </div>
                </div>
                <div className="info-block__basic info-block__basic_border_active">
                    <p className="margin_none">Перечень непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации, утвержден Постановлением Правительства Российской Федерации от 19 января 1998 г. N 55 (в ред. Постановлений Правительства РФ от 20.10.1998 N 1222, от 06.02.2002 N 81). </p>
                </div>
            </section>
        </main>
    )
};

export default RefundPage;
import Location from "../../components/location/Location";
import Nav from "../../components/nav/Nav";
import { navPagesShopArr } from "../../utils/navigationPage";

const OrderCreatePage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/shop", text: '/ Интернет-магазин ' }, { link: "/make_order", text: '/ Как сделать заказ ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Как сделать заказ</h2>
            <Nav navArr={navPagesShopArr} />
            <section className="info-block">
                <div className="info-block__basic">
                    <h3 className="info-block__title margin_none">Оформление заказа</h3>
                    <p className="margin_none">Процедура покупки товара в нашем Интернет-магазине очень проста и состоит из нескольких шагов.</p>
                    <p className="margin_none">После выбора товара нажмите кнопку “В корзину” — товар добавится в вашу корзину. Далее, если вы закончили выбирать товар, нажмите кнопку “ваша корзина”.</p>
                    <p className="margin_none">На странице “ваша корзина” будут перечислены все выбранные вами товары. В поле Количество вы можете изменить количество товара для покупки. После изменения количества товара необходимо нажать кнопку Пересчитать для пересчета итоговой суммы заказа.</p>
                    <p className="margin_none">В колонке Действия над каждым товаром можно произвести следующие действия: либо удалить товар из корзины, либо отложить товар на будущее.</p>
                    <p className="margin_none">Также можно ввести код скидки в соответствующее поле. </p>
                </div>
            </section>
        </main>
    )
};

export default OrderCreatePage;
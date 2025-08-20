import car from '../../images/advantages/Group.svg';
import cash from '../../images/advantages/wallet.svg';
import discoint from '../../images/advantages/offer.svg';

const Advantages = () => {
    return (
        <section className="advantages">
            <h2 className="margin_none" >Наши преимущества</h2>
            <div className="advantages__block" >
                <div className="advantages__element" >
                    <img alt="" src={car} />
                    <p className="margin_none">Быстрая доставка в течении двух дней до Вашего дома</p>
                </div>
                <div className="advantages__element" >
                    <img alt="" src={cash} />
                    <p className="margin_none">Различные возможности оплаты товара, включая несколько кредитных программ</p>
                </div>
                <div className="advantages__element" >
                    <img alt="" src={discoint} />
                    <p className="margin_none">Гибкая система скидок</p>
                </div>
            </div>
        </section>
    )
};

export default Advantages;
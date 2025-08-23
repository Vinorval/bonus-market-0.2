import React from 'react';
import promo1 from '../images/promo/c1ca82be2c4eda3b27c53e3e370fd0c5.jpg';
import promo2 from '../images/promo/dd6682980bcce810f7d5cd87da958782.jpg';
import promo3 from '../images/promo/e5de30102fb1e8291172e0a1030861b6.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Advantages from '../components/advantages/Advantages';
import { promoArr, newsArr } from '../utils/promoAndNews';
import products from '../utils/products';
import Product from '../components/product/Product';
import moreButton from '../images/more.svg';
import BrendsComponent from '../components/brendsComponent/BrendsComponent';
import ProductPopup from '../components/popups/productPopup/ProductPopups';

const HomePage = () => {
    const [startCard, setSartCard] = React.useState(3);
    const ProductCards = products.slice(0, startCard);

    function hideButton() {
        if ((products.length === ProductCards.length)) {
          return true
        } else {
          return false
        }
    }

    function handleMore() {
        if( window.innerWidth < 768 ) {
          return setSartCard(startCard + 5)
        } if (window.innerWidth >= 768) {
          return setSartCard(startCard + 12)
        }
    }

    const createItem = (arr) => arr.map((el, index) => (
        <li key={index} className='element-home-page'>
            <img src={el.img} alt={el.name} />
            <div className='element-home-page__info' >
                <span>{el.date}</span>
                <p className='margin_none' >{el.name}</p>
            </div>
        </li>
    ));

    return (
       
      <main className="page__home padding_limit_width">
            <Carousel showThumbs={false}>
                <div>
                    <img src={promo1} />
                </div>
                <div>
                    <img src={promo2} />
                </div>
                <div>
                    <img src={promo3} />
                </div>
            </Carousel>
            <section className='news-section' >
                <h2 className='margin_none'>Новости магазина</h2>
                <ul className='margin_none padding_none list-style_none news-section__list'>{createItem(newsArr)}</ul>
            </section>
            <section className='news-section' >
                <h2 className='margin_none'>Акции магазина</h2>
                <ul className='margin_none padding_none list-style_none news-section__list'>{createItem(promoArr)}</ul>
            </section>
            <section className='news-section' >
                <h2 className='margin_none'>Мы рекомендуем</h2>
                <ul className="products__list">
                    {ProductCards.map((el) => (
                        <Product key={el._id} item={el} />
                    ))}
                </ul>
                { !hideButton() && <button onClick={handleMore} className="button__more" >
                    <img src={moreButton} alt="button 'more'"/>
                    Показать ещё
                </button> }
            </section>
            <Advantages />
            <BrendsComponent />
        </main>
    );
};

export default HomePage;
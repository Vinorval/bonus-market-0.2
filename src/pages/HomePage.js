import promo1 from '../images/promo/c1ca82be2c4eda3b27c53e3e370fd0c5.jpg';
import promo2 from '../images/promo/dd6682980bcce810f7d5cd87da958782.jpg';
import promo3 from '../images/promo/e5de30102fb1e8291172e0a1030861b6.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Advantages from '../components/advantages/Advantages';

const HomePage = () => {

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
            <Advantages />
        </main>
    
    );
};

export default HomePage;
import basket from "../../images/page-icons/cart.svg";
import like from "../../images/page-icons/like.svg";
import chart from "../../images/page-icons/chart.svg";

const Product = ({item}) => {
    return (
        <li className="product product_type_cart">
            <img src={item.img} alt="product" className="product__img" />
            <div className="product__info">
                <p className="margin_none">{item.name}</p>
                <h4 className="margin_none">{item.price}</h4>
            </div>
            <div className="product__popup">
                <div className="product__buttons">
                    <button className="button background_none margin_none padding_none"><img src={chart} alt="button-chart" /></button>
                    <button className="button background_none margin_none padding_none"><img src={like} alt="button-like" /></button>
                </div>
                <button className="button button_color_yellow button_width_narrow margin_none padding_none" >Быстрый просмотр</button>
                <div className="product__basket-block" >
                    <div className="counter">
                        <button className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                        <p className="margin_none counter__num">1</p>
                        <button className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                    </div>
                    <button className="button button__basket button_color_yellow margin_none padding_none"><img alt="button basket" src={basket}/></button>
                </div>
            </div>
        </li>
    )
};

export default Product;
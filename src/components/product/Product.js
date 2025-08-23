import basket from "../../images/page-icons/cart.svg";
import like from "../../images/page-icons/like.svg";
import chart from "../../images/page-icons/chart.svg";

const Product = ({item}) => {
    return (
        <li className="product product_type_list">
            <img src={item.img} alt="product" className="product__img product__img_type_list" />
            <div className="product__info product__info_type_list">
                <h4 className="margin_none">{item.name}</h4>
                <p className="margin_none">`${item.description} pppppppppppppppppppppp pppppppppppppppppppppppppp ppppppppppppppppppp ppppppppppppppppppppppppp pppppppppppppppppppppppppppp pppppppppppppp ppppppppppp`</p>
            </div>
            <div className="product__buttons product__buttons_type_list">
                <button className="background_none margin_none padding_none border_none"><img src={like} alt="button-like" /></button>
                <button className="background_none margin_none padding_none border_none"><img src={chart} alt="button-chart" /></button>
            </div>
            <div className="product__func">
                <p className="margin_none">{item.price} руб.</p>
                <div className="counter">
                    <button className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                    <p className="margin_none counter__num">1</p>
                    <button className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                </div>
                <button className="button button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
            </div>
        </li>
    )
};

export default Product;
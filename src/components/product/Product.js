import basket from "../../images/page-icons/cart.svg";
import like from "../../images/page-icons/like.svg";
import chart from "../../images/page-icons/chart.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addProductSuccess } from '../../services/actions/products';
import React from "react";

const Product = ({item, type}) => {
    const [ count, setCount ] = React.useState(1);
    const dispatch = useDispatch();
    const pushOrder = () => {
        dispatch(addProductSuccess({...item, count: count}));
        console.log({...item, count: count})
    }

    return ( type === 'list' ? 
        <li className="product product_type_list">
            <img src={item.img} alt="product" className="product__img product__img_type_list" />
            <div className="product__info product__info_type_list">
                <h4 className="margin_none">{item.name}</h4>
                <p className="margin_none">{item.description}</p>
            </div>
            <div className="product__buttons product__buttons_type_list">
                <button className="background_none margin_none padding_none border_none"><img src={like} alt="button-like" /></button>
                <button className="background_none margin_none padding_none border_none"><img src={chart} alt="button-chart" /></button>
            </div>
            <div className="product__func">
                <p className="margin_none">{item.price} руб.</p>
                <div className="counter">
                    <button onClick={() => setCount(count + 1)} className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                    <p className="margin_none counter__num">{count}</p>
                    <button onClick={() => setCount(count - 1)} className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                </div>
                <button onClick={() => pushOrder()} className="button button_color_yellow button_width_wide margin_none padding_none">В корзину</button>
            </div>
        </li> : 
        <li className="product product_type_cart">
            <img src={item.img} alt="product" className="product__img" />
            <div className="product__info">
                <p className="margin_none">{item.name}</p>
                <h4 className="margin_none">{item.price} руб.</h4>
            </div>
            <div className="product__popup">
                <div className="product__buttons">
                    <button className="button background_none margin_none padding_none"><img src={chart} alt="button-chart" /></button>
                    <button className="button background_none margin_none padding_none"><img src={like} alt="button-like" /></button>
                </div>
                <button className="button button_color_yellow button_width_very-wide margin_none padding_none" >Быстрый просмотр</button>
                <div className="product__basket-block" >
                    <div className="counter">
                        <button onClick={() => setCount(count + 1)} className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                        <p className="margin_none counter__num">{count}</p>
                        <button onClick={() => setCount(count - 1)} className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                    </div>
                    <button onClick={() => pushOrder()} className="button button__basket button_color_yellow margin_none padding_none"><img alt="button basket" src={basket}/></button>
                </div>
            </div>
        </li> 
        )
};

export default Product;
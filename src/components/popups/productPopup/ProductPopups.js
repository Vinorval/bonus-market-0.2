import React from "react";
import Modal from "../../modal/Modal";
import Product_image from "../../../images/products/milk/milk-day.jpg";
import like from "../../../images/page-icons/like.svg";
import chart from "../../../images/page-icons/chart.svg";

const ProductPopup = () => {
    const [ showModal, setShowModal ] = React.useState(true);
    const onClick = () => setShowModal(!showModal);

    return (
        <Modal show={showModal} closePopup={onClick} type='product'>
            <div className="popup-product">
            <img className="popup-product__photo" src={Product_image} alt="product" />
            <div className="popup-product__likes" >
                <button className="button margin_none padding_none background_none"><img src={like} alt="button" /></button>
                <button className="button margin_none padding_none background_none"><img src={chart} alt="button" /></button>
            </div>
            <div className="popup-product__info" >
                <h3 className="margin_none">Драже "Сладкие часики" в блочке 30шт 1/600 (13 гр) БЛОК</h3>
                <div className="popup-product__count">
                    <p className="margin_none">15.20 руб.</p>
                    <div className="counter">
                        <button className="button counter__button counter__button_type_left button_color_yellow margin_none padding_none">+</button>
                        <p className="margin_none counter__num">1</p>
                        <button className="button counter__button counter__button_type_riht button_color_yellow margin_none padding_none">-</button>
                    </div>
                </div>
                <div className="popup-product__buttons">
                    <button className="button button_color_yellow button_width_narrow margin_none padding_none">В корзину</button>
                    <button className="button button_color_gray button_width_narrow margin_none padding_none">Купить в 1 клик</button>
                </div>
            </div>
            </div>
        </Modal>
    )
};

export default ProductPopup;
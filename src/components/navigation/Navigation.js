import React from "react";
import navigationLinks from "../../utils/navigationLinks";

const Navigation = () => {
    return (
    <div className="navigation-block padding_limit_width background_color_gray" >
        <nav className="navigation" >
            <ul className="navigation__list margin_none padding_none" >
                {navigationLinks.map((el) => (<li className="navigation__link" >{el.name}</li>))}
            </ul>
        </nav>
        <div className="block-call-back" >
            <p className="block-call-back__number margin_none" >924-565-9456</p>
            <button className="block-call-back__button margin_none padding_none background_none" >Заказать обратный звонок</button>
        </div>
    </div>
);
}

export default Navigation;
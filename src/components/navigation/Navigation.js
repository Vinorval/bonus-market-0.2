import React from "react";
import navigationLinks from "../../utils/navigationLinks";

const Navigation = () => {
    return (
    <div className="navigation-block" >
        <nav className="navigation" >
            <ul className="navigation__list" >
                {navigationLinks.map((el) => (<li className="navigation__link" >{el.name}</li>))}
            </ul>
        </nav>
        <div className="block-call-back" >
            <p className="block-call-back__number" >924-565-9456</p>
            <button className="block-call-back__button" >Заказать обратный звонок</button>
        </div>
    </div>
);
}

export default Navigation;
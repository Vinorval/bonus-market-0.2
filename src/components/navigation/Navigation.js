import navigationLinks from "../../utils/navigationLinks";
import BlockCallBack from "../blockCallBack/BlockCallBack";
import { NavLink } from "react-router";


const Navigation = () => {
    

    return (
    <div className="navigation-block padding_limit_width background_color_gray" >
        <nav className="navigation" >
            <ul className="navigation__list margin_none padding_none" >
                {navigationLinks.map((el, index) => (
                    <li key={index} className="navigation__link" >
                        <NavLink className="text-decoration" to={el.link}>{el.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <BlockCallBack />
    </div>
);
}

export default Navigation;
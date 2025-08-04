import navigationLinks from "../../utils/navigationLinks";
import BlockCallBack from "../blockCallBack/BlockCallBack";

const Navigation = () => {
    return (
    <div className="navigation-block padding_limit_width background_color_gray" >
        <nav className="navigation" >
            <ul className="navigation__list margin_none padding_none" >
                {navigationLinks.map((el) => (<li className="navigation__link" >{el.name}</li>))}
            </ul>
        </nav>
        <BlockCallBack />
    </div>
);
}

export default Navigation;
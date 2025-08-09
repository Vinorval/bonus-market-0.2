import LogoImage from "../../images/logo/logo.svg";
import { NavLink } from "react-router";

const Logo = () => (
    <NavLink className="logo" to={'/'}>
        <img alt='Логотип компании "БонусМаркет.рф"' src={LogoImage} />
    </NavLink>
);

export default Logo;
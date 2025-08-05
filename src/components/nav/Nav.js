import { NavLink } from "react-router";

const Nav = ({navArr}) => {
    return (
        <nav className="pages-nav">
            {navArr.map((el) => (
                <NavLink to={el.path} className={({ isActive }) => isActive ? "pages-nav__link pages-nav__link_active" : "pages-nav__link"}>
                    {el.text}
                </NavLink>
            ))}
        </nav>
    )
}

export default Nav;
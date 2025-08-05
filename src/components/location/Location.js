import { NavLink } from "react-router-dom";

const Location = ({ path }) => {
    return (
        <nav className="location">
            {path.map((item, index) => (<NavLink className="location__link" to={item.link} key={index}>{item.text}</NavLink>))}
        </nav>
    )
};

export default Location;
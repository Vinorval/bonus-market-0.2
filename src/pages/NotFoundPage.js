import { NavLink } from "react-router";
import NotFound from "../images/notfound.svg";

const NotFoundPage = () => {
    return (
        <main className="not-found">
            <img src={NotFound} alt="404" />
            <p className="not-found__text margin_none">К сожалению, ничего не найдено</p>
            <NavLink to="/" className="not-found__link">Вернуться на главную</NavLink>
        </main>
    )
};

export default NotFoundPage;
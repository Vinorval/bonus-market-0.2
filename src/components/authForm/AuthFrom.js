import { NavLink } from "react-router";

const AuthForm = ({ title, inputArr, button, linksArr }) => {
    return (
        <form className="form-auth" >
            <h2 className="form-auth__title margin_none">{title}</h2>
            <div className="form-auth__inputs-block">
                {inputArr.map((el, index) => (
                    <label key={index} className="form-auth__label">
                        <input type={el.type} name={el.name} placeholder={el.placeholder} className="form-auth__input" />
                        <span className="form-auth__error">error</span>
                    </label>
                ))}
            </div>
            <button type="submit" className="button button_color_yellow button_width_narrow margin_none padding_none">{button}</button>
            <div className="form-auth__links-block">
                {linksArr.map((el, index) => (
                    <p key={index} className="margin_none form-auth__text">{el.text}<NavLink className="form-auth__link" to={el.path}>{el.link}</NavLink></p>
                ))}
            </div>
        </form>
    )
};

export default AuthForm;
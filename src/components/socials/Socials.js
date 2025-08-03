import socialsArr from "../../utils/socials";

const Socials = () => {
    return (
        <div className="socials">
            <h4 className="socials__title">Мы в социальных сетях:</h4>
            <ul className="socials__list" >{socialsArr.map((el) => (
                <li className="socials__social">
                    <a href={el.link}>
                        <img src={el.img} alt={`Логотип социальной сети ${el.name}`} />
                    </a>
                </li>))}
            </ul>
        </div>
    )
};

export default Socials;
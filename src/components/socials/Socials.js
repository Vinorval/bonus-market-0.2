import socialsArr from "../../utils/socials";

const Socials = () => {
    return (
        <div className="socials">
            <h4 className="socials__title margin_none">Мы в социальных сетях:</h4>
            <ul className="socials__list margin_none padding_none" >{socialsArr.map((el) => (
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
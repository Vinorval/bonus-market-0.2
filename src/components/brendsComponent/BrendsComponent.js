import brendsArr from "../../utils/brends";

const BrendsComponent = () => {
    return (
        <section className="brends-section background_color_gray">
            <h2 className='margin_none'>Бренды</h2>
            <ul className='margin_none padding_none list-style_none brends-list'>{brendsArr.map((el, index) => (
                <li key={index}><img src={el.img} alt={el.name} /></li>
            ))}</ul>
        </section>)
};

export default BrendsComponent;
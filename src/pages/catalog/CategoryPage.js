import Location from "../../components/location/Location";
import catalogArr from "../../utils/catalog";

const CategoryPage = () => {
    const location = [ { link: "/", text: 'Главная ' }, { link: "/company", text: '/ Каталог ' } ];

    return (
        <main className="page padding_limit_width" >
            <Location path={location} />
            <h2 className="page__title margin_none">Каталог</h2>
            <section className="categorie-list">
                {catalogArr.map((el, index) => (
                    <div className="categorie-block" key={index}>
                        <img className="categorie-block__img" src={el.img} alt={el.name} />
                        <h3 className="margin_none" >{el.name}</h3>
                    </div>
                ))}
            </section>
        </main>
    )
};

export default CategoryPage;
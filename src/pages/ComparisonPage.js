import React from "react";
import products from "../utils/products";
import characteristicArr from "../utils/characteristic";

const ComparisonPage = () => {
    let category = [];
    const [isActiveCategoty, setActiveCategory] = React.useState('');
    const [isActiveProducts, setActiveProducts] = React.useState([]);
    const [isCharacteristicName, setCharacteristicName] = React.useState([]);

    function returnCategorie () {
        for(let i = 0; i < products.length; i++){
            let cat = products[i].category[1];
            let product = products[i];
            let productCategory = category.find(el => el.category === cat);
            if(Boolean(productCategory)) {
                category = category.map(el => el.category === productCategory.category ? {...el, count: el.count + 1, products: [...el.products, product]} : el )
            } else {
                category.push({category: cat, count: 1, products: [product], categoryRUS: product.categoryRUS[1]})
            }
        }
    }

    const onClick = (el) => {
        setActiveCategory(el.category);
        setActiveProducts(category.find(item => item.category === el.category).products);
        setCharacteristicName(characteristicArr.find(item => item.category === el.category));
    }

    returnCategorie();

    return (
        <main className="page__comparison" >
            <h2 className="margin_none" >Сравнение товаров</h2>
            <div className="categorie-comparison" >
                {category.map((el, index) => (<button className="margin_none button button_color_yellow" onClick={() => onClick(el)} key={index}>{el.categoryRUS} {el.count}</button>))}
            </div>
            {isActiveCategoty !== '' && (<div className="products-comparison">
                <div className="products-comparison__info" >{isActiveProducts.map((el) => (<div className="products-comparison__product">
                        <img className="products-comparison__img" src={el.img} alt="product" />
                        <p className="margin_none">{el.name}</p>
                        <h3 className="margin_none">{el.price}</h3>
                    </div>))}
                </div>
                <h2>Общие характеристики</h2>
                <ul className="margin_none padding_none list-style_none characteristic-list" >{isCharacteristicName.arr.map((el, index) => (
                    <li>
                        <span>{el}</span>
                        <div className="characteristic">{isActiveProducts.map((item) => (<p className="characteristic__item" >{item.characteristic[el]}</p>))}
                        </div>
                    </li>
                ))}</ul>
            </div>)}
        </main>
    );
};

export default ComparisonPage;
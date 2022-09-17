import { useState, useEffect } from "react";

const productTypes = [
    {
        type: 1,
        name: "Кофе",
    },
    {
        type: 2,
        name: "Чай",
    },
    {
        type: "lemonade",
        name: "Лимонады",
    },
    {
        type: "cocktail",
        name: "Коктейли",
    },
    {
        type: "sweet",
        name: "Сладкое",
    },
    {
        type: "snacks",
        name: "Снеки",
    },
];

const ProductsNav = ({ products, productsFilter, setProductsFilter }) => {
    const [productsCount, setProductsCount] = useState({});

    console.log(productsCount, productsFilter);

    useEffect(() => {
        const newProductsCount = {};

        products.forEach((el) => {
            if (el["category_id"] in newProductsCount) {
                newProductsCount[el["category_id"]]++;
            } else {
                newProductsCount[el["category_id"]] = 1;
            }
        });

        setProductsCount(newProductsCount);
    }, [products]);

    return (
        <div className="products-nav">
            <h2 className="products-nav-header">Категории</h2>
            <ul className="products-nav-list">
                {productTypes.map((el) => (
                    <li
                        className={`products-nav-list__el ${
                            productsFilter === el.type
                                ? "products-nav-list__el_active"
                                : ""
                        }`}
                        onClick={() => setProductsFilter(el.type)}
                    >
                        <div className="products-nav-list__el_name">
                            {el.name}
                        </div>
                        <div
                            className={`products-nav-list__el_count ${
                                productsFilter === el.type
                                    ? "products-nav-list__el_active"
                                    : ""
                            }`}
                        >
                            {productsCount[el.type]}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsNav;
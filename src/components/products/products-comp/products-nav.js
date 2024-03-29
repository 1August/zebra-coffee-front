import axios from "axios";
import { useState, useEffect } from "react";

const ProductsNav = ({ products, productsFilter, setProductsFilter }) => {
    const [productsCount, setProductsCount] = useState({});

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
            type: 3,
            name: "Лимонады",
        },
        {
            type: 4,
            name: "Коктейли",
        },
        {
            type: 5,
            name: "Сладкое",
        },
        {
            type: 6,
            name: "Снеки",
        },
    ];

    useEffect(() => {
        const getCategories = async () => {
            const result = await axios.get(
                "https://zebra-hackathon.herokuapp.com/api/categories"
            );
            console.log(result);
        };
        getCategories();
    }, []);

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
                        key={el.name}
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

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
            name: "Лимонады",
        },
    ];

    useEffect(() => {
        const newProductsCount = {};

        products.forEach((el) => {
            if (el["categoryId"] in newProductsCount) {
                newProductsCount[el["categoryId"]]++;
            } else {
                newProductsCount[el["categoryId"]] = 1;
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

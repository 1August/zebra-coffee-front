import { useState, useEffect } from "react";

import axios from "axios";

import ProductsNav from "./products-comp/products-nav";
import ProductsContainer from "./products-comp/products-container";
import ProductCard from "./products-comp/product-card";
import ProductPrice from "./products-comp/product-price";

// import products from "./data";

import "./products-sass/products.sass";

const Products = () => {
    const [products, setProducts] = useState(null);
    const [productsFilter, setProductsFilter] = useState(0);

    const [leftPrice, setLeftPrice] = useState(0);
    const [rightPrice, setRightPrice] = useState(0);

    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const result = await axios.get(
                "https://zebra-hackathon.herokuapp.com/api/products?page=1&limit=15",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
            setProducts(result.data.results);
        };
        getProducts();
    }, []);

    useEffect(() => {
        if (products) {
            let tempMax = -1;
            products.forEach(
                (el) => (tempMax = el.price > tempMax && el.price)
            );
            setMaxPrice(tempMax);
            setRightPrice(tempMax);
        }
    }, [products]);

    if (!products) {
        return <div className="">Loading</div>;
    }

    return (
        <div className="product">
            <div class="container">
                <div className="product-main">
                    <div className="product-main-left">
                        <ProductsNav
                            products={products}
                            productsFilter={productsFilter}
                            setProductsFilter={setProductsFilter}
                        />
                        <ProductPrice
                            max={maxPrice}
                            setRightPrice={setRightPrice}
                            setLeftPrice={setLeftPrice}
                        />
                    </div>

                    <div className="product-main-right">
                        {productsFilter ? (
                            <div class="products-lists">
                                <div class="product-lists-container">
                                    {products
                                        .filter(
                                            (el) =>
                                                el["category_id"] ==
                                                productsFilter
                                        )
                                        .filter(
                                            (el) =>
                                                el.price >= leftPrice &&
                                                el.price <= parseInt(rightPrice)
                                        )
                                        .map((el) => (
                                            <ProductCard
                                                img={el.image}
                                                name={el.name}
                                                description={el.description}
                                                price={el.price}
                                            />
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <div class="products-lists">
                                <h2>Кофе</h2>
                                <div class="product-lists-container">
                                    {products
                                        .filter((el) => el["category_id"] == 1)
                                        .filter(
                                            (el) =>
                                                el.price >= leftPrice &&
                                                el.price <= parseInt(rightPrice)
                                        )
                                        .map((el) => (
                                            <ProductCard
                                                img={el.image}
                                                name={el.name}
                                                description={el.description}
                                                price={el.price}
                                            />
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

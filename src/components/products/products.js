import {useState, useEffect} from "react";

import axios from "axios";

import ProductsNav from "./products-comp/products-nav";
import ProductCard from "./products-comp/product-card";
import ProductPrice from "./products-comp/product-price";


import "./products-sass/products.sass";

const Products = () => {
    /**
     *       "id": 2,
     *       "name": "Лавандовый раф 360 мл",
     *       "category_id": 1,
     *       "price": "950",
     *       "cost_price": "665",
     *       "image": "https://cachizer1.2gis.com/market/5e3a84f2-57fb-4b8b-abf0-93cfd0841c63.png?w=1088",
     *       "description": "Lorem ipsum"
     */
    const [products, setProducts] = useState(null);
    const [productsFilter, setProductsFilter] = useState(0);

    const [price, setPrice] = useState({
        left: 0,
        right: 0
    })

    const [tempCart, setTempCart] = useState([])

    const handleTempCartAdd = (product, productNumber) => {
        tempCart.length <= 0 ?
            setTempCart([{...product, productNumber}]) :
            setTempCart([...tempCart, {...product, productNumber}])

        const prevCart = JSON.parse(localStorage.getItem('cart')) || []

        localStorage.setItem('cart', JSON.stringify([
            ...prevCart, {...product, productNumber}
        ]))
    }

    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const result = await axios.get("https://zebra-hackathon.herokuapp.com/api/products?page=1&limit=40");
            // console.log(result.data.results)
            setProducts(result.data.results);
        };
        getProducts();
    }, []);

    useEffect(() => {
        if (products) {
            // console.log(products)
            const tempMax = products.reduce((max, el) => (+el.price > +max ? +el.price : max), 0)
            setMaxPrice(tempMax);
            setPrice({...price, right: tempMax})
        }
    }, [products]);

    if (!products) {
        return (
            <div className="container">
                <h1>Loading</h1>
            </div>
        );
    }

    return (
        <div className="product">
            <div className="container">
                <div className="product-main">
                    <div className="product-main-left">
                        <ProductsNav
                            products={products}
                            productsFilter={productsFilter}
                            setProductsFilter={setProductsFilter}
                        />
                        <ProductPrice
                            max={maxPrice}
                            price={price}
                            setPrice={setPrice}
                        />
                    </div>

                    <div className="product-main-right">
                        <div className="products-lists">
                            <h2>{'Кофе или Популярные'}</h2>
                            <div className="product-lists-container">
                                {
                                    products
                                        .filter(el => el.price >= +price.left && el.price <= +price.right)
                                        .map((el) => <ProductCard
                                            key={el.id}
                                            el={el}
                                            handleTempCartAdd={handleTempCartAdd}
                                        />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
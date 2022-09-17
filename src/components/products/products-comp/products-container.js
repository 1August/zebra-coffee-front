import React from "react";

import ProductCard from "./product-card";

const ProductsContainer = ({ header }) => {
    return (
        <div className="products-container">
            <h2 className="products-container-header">{header}</h2>
            <div className="products-container-main">
                <ProductCard
                    name="Какао & Апельсин Овсяный Латте"
                    description="Яркий, сочный, но в то же время мягкий и
                                шелковистый латте на овсяной основе, с нотками
                                апельсина и какао, на обжарке"
                />
            </div>
        </div>
    );
};

export default ProductsContainer;

import React from "react";

import { Button } from "../../../UI/Button/Button";

const ProductCard = ({ img, name, description, price }) => {
    return (
        <div className="product-card">
            <div className="product-card-img__container">
                <img src={img} className="product-card-img" />
            </div>

            <div className="product-card-info">
                <div className="product-card-info-container">
                    <div className="product-card-name">{name}</div>
                    <div className="product-card-price">{price}тг</div>
                </div>

                <div className="product-card-description">{description}</div>
                <div className="product-card-count">
                    <input type="number" min="0" max="20" />
                </div>
            </div>
            <div className="product-card-button__container">
                <Button className="product-card-button">
                    Положить в корзину
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;

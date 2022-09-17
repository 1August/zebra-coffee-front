import React from "react";

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
                    <input type="number" min="0" max="20" value="0" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

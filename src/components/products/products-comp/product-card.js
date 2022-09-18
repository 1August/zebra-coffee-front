import React, {useState} from "react";

import { Button } from "../../../UI/Button/Button";

const ProductCard = ({el, handleTempCartAdd}) => {
    const {
        image, name, description, price
    } = el

    const [productNumber, setProductNumber] = useState(0)

    const handleNumberChange = e => {
        setProductNumber(e.target.value)
    }

    const handleCartAddBtnClick = () => {
        if (productNumber < 1) return
        handleTempCartAdd(el, productNumber)
        setProductNumber(0)
    }

    return (
        <div className="product-card">
            <div className="product-card-img__container">
                <img src={image} className="product-card-img" alt={'Product card'}/>
            </div>

            <div className="product-card-info">
                <div className="product-card-info-container">
                    <div className="product-card-name">{name}</div>
                    <div className="product-card-price">{price}тг</div>
                </div>

                <div className="product-card-description">{description}</div>
                <div className="product-card-count">
                    <input
                        type="number"
                        value={productNumber}
                        onChange={handleNumberChange}
                        min="0"
                        max="20"
                    />
                </div>
            </div>
            <div className="product-card-button__container">
                <Button
                    className="product-card-button"
                    onClick={handleCartAddBtnClick}
                >
                    Положить в корзину
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;

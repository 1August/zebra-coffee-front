import React, { useState } from "react";

import remove from "./remove.png";

const CartCard = ({ el, deleted, setDeleted }) => {
    const { image, name, description, price, productNumber } = el;

    const handleDelete = () => {
        const tempCart = JSON.parse(localStorage.getItem("cart"));

        let indexOfElement = -1;

        tempCart.forEach((prod, index) => {
            if (prod.id == el.id) {
                indexOfElement = index;
            }
        });

        console.log(indexOfElement);

        if (tempCart[indexOfElement].productNumber > 1) {
            tempCart[indexOfElement].productNumber =
                parseInt(tempCart[indexOfElement].productNumber) - 1;
        } else {
            tempCart.splice(indexOfElement, 1);
        }

        setDeleted(!deleted);
        localStorage.setItem("cart", JSON.stringify(tempCart));
    };

    return (
        <div className="product-card">
            <div className="product-card__delete_button" onClick={handleDelete}>
                <img
                    src={remove}
                    alt=""
                    className="product-card__delete_icon"
                />
            </div>

            <div className="product-card-img__container">
                <img
                    src={image}
                    className="product-card-img"
                    alt={"Product card"}
                />
            </div>

            <div className="product-card-info">
                <div className="product-card-info-container">
                    <div className="product-card-name">
                        {productNumber}шт. {name}
                    </div>
                </div>

                <div className="product-card-description">{description}</div>

                <div className="product-card-price">
                    {productNumber}шт. X {price}тг = {productNumber * price}тг
                </div>
            </div>
        </div>
    );
};

export default CartCard;

import { useState } from "react";
import ReactDOM from "react-dom";

import { Button } from "../../UI/Button/Button";
import remove from "./remove.png";

const CartModal = ({
    isModal,
    closeModal,
    filteredStores,
    login,
    setUserLocation,
}) => {
    if (!isModal) return null;

    const options = [];

    filteredStores.forEach((el) => {
        options.push({
            value: el.location_id,
            label: el.street,
        });
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserLocation(e.target.select.value);
        login();
    };

    return ReactDOM.createPortal(
        <div className="cart-modal">
            <div className="cart-modal__container">
                <div
                    className="cart-modal__delete_button"
                    onClick={() => closeModal(false)}
                >
                    <img
                        src={remove}
                        alt=""
                        className="cart-modal__delete_icon"
                    />
                </div>
                <form className="card-modal-form" onSubmit={handleSubmit}>
                    <h2 className="card-modal-header">Выбери адрес</h2>

                    <select required name="select">
                        {options.map((el) => (
                            <option value={el.value}>{el.label}</option>
                        ))}
                    </select>

                    <button style={{ width: "100%" }} type="submit">
                        Оплатить ETH
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default CartModal;

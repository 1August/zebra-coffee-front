import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./profile-modal.sass";
import remove from "./remove.png";

import axios from "axios";
import { Button } from "../../UI/Button/Button";

const FranModal = ({ showFModal, setShowFModal, f }) => {
    const approveF = async () => {
        axios.post(
            `https://zebra-hackathon.herokuapp.com/api/franchise/user/${f.id}`
        );
    };

    console.log(f);

    return ReactDOM.createPortal(
        <div className="cart-modal">
            <div className="cart-modal__container profile-modal__container profile-modal__f">
                <h2 style={{ paddingTop: 0 }}>Accept</h2>
                <div
                    className="cart-modal__delete_button"
                    onClick={() => setShowFModal(false)}
                >
                    <img
                        src={remove}
                        alt=""
                        className="cart-modal__delete_icon"
                    />
                </div>
                <div
                    className="modal-header-profile"
                    style={{ fontWeight: 700, fontSize: "1.5rem" }}
                >
                    Letter:
                </div>
                <div className="modal-letter" style={{ marginBottom: "1rem" }}>
                    {f.letter}
                </div>
                <Button style={{ width: "100%" }} onClick={approveF}>
                    Accept
                </Button>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default FranModal;

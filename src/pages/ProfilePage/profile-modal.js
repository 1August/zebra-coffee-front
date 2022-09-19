import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Button } from "../../UI/Button/Button";
import remove from "./remove.png";

import "./profile-modal.sass";
import axios from "axios";

const ProfileModal = ({ isModal, setIsModal, userId }) => {
    const [locations, setLocations] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const getLocations = async () => {
            const result = await axios.get(
                "https://zebra-hackathon.herokuapp.com/api/locations"
            );

            setLocations(result.data);
        };
        getLocations();
    }, []);

    if (!isModal) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({
            userId: +userId,
            locationId: +e.target.select.value,
            street: e.target.text.value,
            letter: e.target.textarea.value,
        });

        const result = await axios.post(
            "https://zebra-hackathon.herokuapp.com/api/franchise",
            {
                userId: +userId,
                locationId: +e.target.select.value,
                street: e.target.text.value,
                letter: e.target.textarea.value,
            }
        );
        console.log(result);
    };

    if (!locations) {
        return <div className="">Loading...</div>;
    }

    return ReactDOM.createPortal(
        <div className="cart-modal">
            <div className="cart-modal__container profile-modal__container">
                <h2 style={{ paddingTop: 0 }}>Write letter</h2>
                <div
                    className="cart-modal__delete_button"
                    onClick={() => setIsModal(false)}
                >
                    <img
                        src={remove}
                        alt=""
                        className="cart-modal__delete_icon"
                    />
                </div>
                <form className="profile-modal-form" onSubmit={handleSubmit}>
                    <select
                        required
                        name="select"
                        onChange={(e) => {
                            setUserLocation(e.target.value);
                        }}
                    >
                        {locations.map((el) => (
                            <option value={el.id}>
                                {el.country}, {el.cities}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        className="profile-modal-form-input"
                        placeholder="address"
                        name="text"
                    />
                    <textarea
                        rows="10"
                        cols="35"
                        name="textarea"
                        className="profile-modal-form-textarea"
                    ></textarea>
                    <Button
                        type="submit"
                        style={{ marginTop: "1rem", width: "100%" }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default ProfileModal;

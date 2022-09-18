import './ManageCard.scss'
import {Button} from "../Button/Button";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setModal, setModalAndShow, showModal} from "../../redux/modalReducer";

export const ManageCard = ({el}) => {
    const dispatch = useDispatch()

    const {
        id,
        name,
        image,
        cost_price,
        price,
        description
    } = el


    const handleManageCardChangeClick = () => {
        dispatch(setModalAndShow(el))
    }

    return (
        <div className="manageCard" id="manageCard">
            <div className="manageCard-img__container">
                <img src={image} className="manageCard-img" alt={'Product card'}/>
            </div>

            <div className="manageCard-info">
                <div className="manageCard-info-container">
                    <div className="manageCard-name">{name}</div>
                    <div className="manageCard-price">{price}тг</div>
                </div>
                <div className="manageCard-description">{description}</div>
                {/*<div className="manageCard-count">*/}
                {/*    <input*/}
                {/*        type="number"*/}
                {/*        // value={productNumber}*/}
                {/*        // onChange={handleNumberChange}*/}
                {/*        min="0"*/}
                {/*        max="20"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
            <div className="manageCard-button__container">
                <Button
                    className="manageCard-edit-button"
                    onClick={handleManageCardChangeClick}
                >
                    Изменить
                </Button>
                <Button
                    className="manageCard-edit-button"
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
}
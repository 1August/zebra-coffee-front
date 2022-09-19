import './ManageCard.scss'
import {Button} from "../Button/Button";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeFunctionality, setModal, setModalAndShow, showModal} from "../../redux/modalReducer";
import {deleteProduct} from "../../redux/asyncActions/modalActions";
import {useNavigate} from "react-router-dom";
import tempPhoto from '../../assets/img/coffeeTemp.png'

export const ManageCard = ({el}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    const {
        id,
        name,
        image,
        cost_price,
        price,
        description
    } = el


    const handleManageCardChangeClick = () => {
        dispatch(changeFunctionality({functionality: 'w'}))
        dispatch(setModalAndShow(el))
    }

    const handleManageCardDelete = () => {
        dispatch(deleteProduct({id}))
        nav('/')
    }

    return (
        <div className="manageCard" id="manageCard">
            <div className="manageCard-img__container">
                <img src={image || tempPhoto} className="manageCard-img" alt={'Product card'}/>
            </div>

            <div className="manageCard-info">
                <div className="manageCard-info-container">
                    <div className="manageCard-name">{name}</div>
                    <div className="manageCard-price">{price}тг</div>
                </div>
                <div className="manageCard-description">{description}</div>
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
                    onClick={handleManageCardDelete}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
}
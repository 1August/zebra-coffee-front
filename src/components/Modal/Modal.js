import './Modal.scss'
import {IoCloseOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {changeContent, hideModal} from "../../redux/modalReducer";
import {useState} from "react";
import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";

import {editModal} from "../../redux/asyncActions/modalActions";
import {useNavigate} from "react-router-dom";

export const Modal = () => {
    const dispatch = useDispatch()
    const {isOpen, title, content} = useSelector(state => state.modal)
    const nav = useNavigate()

    const handleModalClose = () => {
        dispatch(hideModal())
    }

    const handleModalInputChange = e => {
        dispatch(changeContent({...content, [e.target.name]: e.target.value}))
    }

    const handleModalSubmit = () => {
        dispatch(editModal({...content, id: content.id}))
        dispatch(hideModal())
        nav('/')
    }

    if (!isOpen) return console.log({isOpen, title, content})
    return(
        <div className="modal" id="modal">
            <div className="container">
                <div className="modalClose">
                    <IoCloseOutline
                        onClick={handleModalClose}
                    />
                </div>
                <div className="modalWindow">
                    <div className="modalTitle">
                        <h1>{title}</h1>
                    </div>
                    <div className="modalContent">
                        <div className="modalImg">
                            <img src={content.image} alt="Product image"/>
                            <p>
                                <label htmlFor="changeImage">
                                    Change image
                                </label>
                                <Input
                                    id={'changeImage'}
                                    type="file"
                                    accept={'image/*'}
                                    alt={'Avatar'}
                                    name={'image'}
                                    onChange={handleModalInputChange}
                                />
                            </p>
                        </div>
                        <div className="modalText">
                            <div>
                                <label htmlFor="name">Product name</label>
                                <Input
                                    id={'name'}
                                    type="text"
                                    placeholder={'Product name'}
                                    value={content.name}
                                    name={'name'}
                                    onChange={handleModalInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description</label>
                                <Input
                                    type="text"
                                    placeholder={'Description'}
                                    value={content.description}
                                    name={'description'}
                                    onChange={handleModalInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <Input
                                    type="number"
                                    placeholder={'Price'}
                                    value={content.price}
                                    name={'price'}
                                    onChange={handleModalInputChange}
                                    min={0}
                                />
                            </div>
                            <div className="modalSubmit">
                                <Button
                                    onClick={handleModalSubmit}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
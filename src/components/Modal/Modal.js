import './Modal.scss'
import {IoCloseOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {changeContent, hideModal} from "../../redux/modalReducer";
import {useState} from "react";
import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";

import {createNewProduct, editModal} from "../../redux/asyncActions/modalActions";
import {useNavigate} from "react-router-dom";

export const Modal = () => {
    const dispatch = useDispatch()
    const {isOpen, title, content, functionality} = useSelector(state => state.modal)
    const nav = useNavigate()

    const handleModalClose = () => {
        dispatch(hideModal())
    }

    const handleModalInputChange = e => {
        dispatch(changeContent({...content, [e.target.name]: e.target.value}))
    }

    const handleModalSubmit = () => {
        if (functionality === 'w') {
            dispatch(editModal({...content, id: content.id}))
            dispatch(hideModal())
        } else if (functionality === 'c') {
            const {id, ...data} = content
            dispatch(createNewProduct(data))
            dispatch(hideModal())
        } else if (functionality === 'x') {

        }
        nav('/')
    }

    if (!isOpen) return null
    return (
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
                                    id={'description'}
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
                                    id={'price'}
                                    type="number"
                                    placeholder={'Price'}
                                    value={content.price}
                                    name={'price'}
                                    onChange={handleModalInputChange}
                                    min={0}
                                />
                            </div>
                            {
                                functionality === 'c' && <>
                                    <div>
                                        <label htmlFor="costPrice">Cost price</label>
                                        <Input
                                            id={'costPrice'}
                                            type="number"
                                            placeholder={'costPrice'}
                                            value={content.costPrice}
                                            name={'costPrice'}
                                            onChange={handleModalInputChange}
                                            min={0}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={'category'}>Category</label>
                                        <select name="categoryId" id="category"
                                                onChange={handleModalInputChange}
                                        >
                                            <option value="1">Кофе</option>
                                            <option value="2">Чай</option>
                                            <option value="3">Лимонады</option>
                                            <option value="4">Коктейли</option>
                                            <option value="5">Сладкое</option>
                                            <option value="6">Снеки</option>
                                        </select>
                                    </div>
                                </>
                            }
                            <div className="modalSubmit">

                                {
                                    functionality === 'w' ? <Button
                                        onClick={handleModalSubmit}
                                    >
                                        Edit
                                    </Button> : (functionality === 'c' ? <Button
                                        onClick={handleModalSubmit}
                                    >
                                        Create
                                    </Button> : (functionality === 'x' ? <Button
                                        onClick={handleModalSubmit}
                                    >
                                        Delete
                                    </Button> : null))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
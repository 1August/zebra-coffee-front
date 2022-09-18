import './Modal.scss'
import {IoCloseOutline} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../redux/modalReducer";
import {useState} from "react";

export const Modal = () => {
    const dispatch = useDispatch()
    const {isOpen, title, content} = useSelector(state => state.modal)

    const handleModalClose = () => {
        dispatch(hideModal())
    }

    const [editedCopy, setEditedCopy] = useState(JSON.parse(JSON.stringify(content)))

    if (!isOpen) return null
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
                            <img src={editedCopy.image} alt="Product image"/>
                        </div>
                        <div className="modalText">
                            <h1>{editedCopy.name}</h1>
                            <input type="text" placeholder={'Product name'} value={editedCopy.name}/>
                            <p>{editedCopy.description}</p>
                            <h3>{editedCopy.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
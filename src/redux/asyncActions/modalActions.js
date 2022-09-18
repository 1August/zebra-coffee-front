import axios from "axios";
import {changeContent} from "../modalReducer";

export const editModal = payload =>
        dispatch => {
            console.log(payload)
            axios.put(`https://zebra-hackathon.herokuapp.com/api/products/${payload.id}`, {
                ...payload
            }).then(res => {
                console.log(res)
                dispatch(changeContent(payload))
            })
        }
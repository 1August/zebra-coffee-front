import axios from "axios";
import {changeContent, deleteProductAction, setModal} from "../modalReducer";

export const editModal = payload =>
    dispatch => axios.put(`https://zebra-hackathon.herokuapp.com/api/products/${payload.id}`, {
        ...payload
    }).then(res => {
        if (res.status !== 204) {
            throw new Error('Error on edit. Status is wrong.')
        }
        dispatch(changeContent(payload))
    })

export const deleteProduct = payload =>
    dispatch => axios.delete(`https://zebra-hackathon.herokuapp.com/api/products/${payload.id}`)
        .then(res => {
            if (res.status !== 204) {
                throw new Error('Error on delete. Status is wrong!')
            }
            dispatch(deleteProductAction(payload))
        })

export const createNewProduct = payload =>
    dispatch => {
        console.log(payload)
        axios.post('https://zebra-hackathon.herokuapp.com/api/products', {
            ...payload
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Creation is not succeed!')
                }
                console.log(res)
                const defaultModal = {
                    isOpen: false,
                    title: 'Product',
                    content: {
                        id: 0,
                        categoryId: 0,
                        name: '',
                        image: '',
                        price: '',
                        description: ''
                    },
                    // Read-Create-Write-Xdelete
                    functionality: 'w'
                }

                dispatch(setModal({...defaultModal, ...payload, ...res.data.result}))
            })
    }
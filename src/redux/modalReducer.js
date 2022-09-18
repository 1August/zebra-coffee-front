const initialState = {
    isOpen: false,
    title: 'Product',
    content: {
        id: 0,
        categoryId: 0,
        name: '',
        image: '',
        price: '',
        description: ''
    }
}

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'
const SET_MODAL = 'SET_MODAL'
const SET_MODAL_AND_SHOW = 'SET_MODAL_AND_SHOW'
const CHANGE_CONTENT = 'CHANGE_CONTENT'

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, isOpen: true}
        case HIDE_MODAL:
            return {...state, isOpen: false}
        case SET_MODAL:
            return {...state, ...action.payload}
        case SET_MODAL_AND_SHOW:
            console.log({...state, isOpen: true, content: {...action.payload}})
            return {...state, isOpen: true, content: {...action.payload}}
        case CHANGE_CONTENT:
            return {...state, content: {...action.payload}}
        default:
            return state
    }
}

export const showModal = () => ({type: SHOW_MODAL})
export const hideModal = () => ({type: HIDE_MODAL})
export const setModal = payload => ({type: SET_MODAL, payload})
export const setModalAndShow = payload => ({type: SET_MODAL_AND_SHOW, payload})
export const changeContent = payload => ({type: CHANGE_CONTENT, payload})
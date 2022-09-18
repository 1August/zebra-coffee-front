const initialState = {
    isOpen: false,
    title: 'Product',
    content: {
        name: '',
        image: '',
        price: '',
        description: ''
    }
}

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'
const SET_MODAL = 'SET_MODAL'

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, isOpen: true}
        case HIDE_MODAL:
            return {...state, isOpen: false}
        case SET_MODAL:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const showModal = () => ({type: SHOW_MODAL})
export const hideModal = () => ({type: HIDE_MODAL})
export const setModal = payload => ({type: SET_MODAL, payload})
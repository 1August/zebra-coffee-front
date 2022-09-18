const initialState = {
    isOpen: false,
    title: 'Product',
    content: {
        id: 0,
        categoryId: 0,
        name: '',
        image: '',
        price: '',
        costPrice: '',
        description: ''
    },
    // Read-Create-Write-Xdelete
    functionality: 'w'
}

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'
const SET_MODAL = 'SET_MODAL'
const SET_MODAL_AND_SHOW = 'SET_MODAL_AND_SHOW'
const CHANGE_CONTENT = 'CHANGE_CONTENT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT'
const CHANGE_FUNC = 'CHANGE_FUNC'

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, isOpen: true}
        case HIDE_MODAL:
            return {...state, isOpen: false}
        case SET_MODAL:
            return {...state, ...action.payload}
        case CHANGE_FUNC:
            return {...state, functionality: action.payload.functionality}
        case SET_MODAL_AND_SHOW:
            return {...state, isOpen: true, content: {...action.payload}}
        case CHANGE_CONTENT:
            return {...state, content: {...action.payload}}
        case DELETE_PRODUCT:
            return {}
        default:
            return state
    }
}

export const showModal = () => ({type: SHOW_MODAL})
export const hideModal = () => ({type: HIDE_MODAL})
export const setModal = payload => ({type: SET_MODAL, payload})
export const setModalAndShow = payload => ({type: SET_MODAL_AND_SHOW, payload})
export const changeContent = payload => ({type: CHANGE_CONTENT, payload})
export const deleteProductAction = payload => ({type: DELETE_PRODUCT, payload})
// export const createNewProductAction = payload => ({type: CREATE_NEW_PRODUCT, payload})
export const changeFunctionality = payload => ({type: CHANGE_FUNC, payload})
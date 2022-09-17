const initialState = {
    users: []
}

const ADD_MANY_USERS = 'ADD_MANY_USERS'
const ADD_USER = 'ADD_USER'

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANY_USERS:
            return {...state, users: [...state.users, ...action.payload]}
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}

export const addManyUsersAction = payload => ({type: ADD_MANY_USERS, payload})
export const addUserAction = payload => ({type: ADD_USER, payload})
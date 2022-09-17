const initialState = {
    user: null,
    token: null
}

const SET_CREDENTIALS = 'SET_CREDENTIALS'
const LOG_OUT = 'LOG_OUT'

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CREDENTIALS:
            localStorage.setItem('user', JSON.stringify(action?.payload))
            const {token, ...user} = action?.payload
            return {...user, token}
        case LOG_OUT:
            localStorage.removeItem('user')
            return {user: null, token: null}
        default:
            return state
    }
}

export const setCredentialsAction = payload => ({type: SET_CREDENTIALS, payload})
export const logOutAction = () => ({type: LOG_OUT})
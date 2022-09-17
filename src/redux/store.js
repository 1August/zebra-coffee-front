import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import {authReducer} from "./authReducer"
import {usersReducer} from "./usersReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({users: usersReducer, auth: authReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
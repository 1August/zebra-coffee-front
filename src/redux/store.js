import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import {authReducer} from "./authReducer"
import {usersReducer} from "./usersReducer"
import thunk from "redux-thunk"
import {modalReducer} from "./modalReducer";
import {statReducer} from "./statReducer";

const rootReducer = combineReducers({users: usersReducer, auth: authReducer, modal: modalReducer, stat: statReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
import axios from "axios"
import {addUserAction} from "../usersReducer"
import {setCredentialsAction} from "../authReducer"

import {decodeToken} from 'react-jwt'

/**
 *
 * @param payload
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const signUp = payload =>
    dispatch =>
        axios.post('https://zebra-hackathon.herokuapp.com/api/register', {...payload})
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Error on register user. Status is failed!')
                }
                dispatch(addUserAction(payload))
            })

/**
 * @param payload
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const signIn = payload =>
    dispatch =>
        axios.post('https://zebra-hackathon.herokuapp.com/api/login', {...payload})
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Can not login. Status is wrong.')
                }

                const data = decodeToken(res.data.token)
                console.log({user: data, token: res.data.token})

                dispatch(setCredentialsAction({user: data, token: res.data.token}))
            })
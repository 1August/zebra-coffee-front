import axios from "axios"
import {addManyUsersAction, addUserAction} from "../usersReducer"
import {setCredentialsAction} from "../authReducer"

import {decodeToken} from 'react-jwt'

export const fetchManyUsers = () =>
    dispatch =>
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => dispatch(addManyUsersAction(res.data.data)))

/**
 *
 * {
 *     "username": "effuone",
 *     "firstName": "Alibek",
 *     "lastName": "Seitov",
 *     "image": "image.png",
 *     "locationId": 5,
 *     "email": "albkfil@gmail.com",
 *     "phoneNumber": "87019867333",
 *     "password": "1z2x3c4v5B*"
 * }
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
// axios.post('https://reqres.in/api/register', {
//     username: payload.email,
//     email: payload.email,
//     password: payload.password
// })
//     .then(res => {
//         if (res.status !== 200) return
//         dispatch(addUserAction({...payload, id: res.data.id}))
//         dispatch(setCredentialsAction({user: {...payload, id: res.data.id}, token: res.data.token}))
//
//         const user = {
//             id: res.data.id,
//             email: payload.email,
//             first_name: payload.first_name,
//             last_name: payload.last_name,
//             token: res.data.token
//         }
//         localStorage.setItem('user', JSON.stringify(user))
//     })


/**
 *
 * {
 *     "username":"effuone",
 *     "password": "1z2x3c4v5B*"
 * }
 *
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
                /**
                 * TODO:
                 * Need to get __UserID__
                 */

                const data = decodeToken(res.data.token)

                dispatch(setCredentialsAction({user: data, token: res.data.token}))
            })
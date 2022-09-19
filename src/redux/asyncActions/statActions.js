import axios from "axios";
import {changeStat} from "../statReducer";

// export const getStatData = payload =>
//     dispatch => axios.get('')
//         .then(res => {
//                 if (res.status !== 200 || res.status !== 201){
//                         throw new Error('Can not get statistics!')
//                 }
//                 console.log(res)
//                 dispatch(changeStat(...res.data.result))
//         })

export const getStatData = payload =>
    dispatch => {
        console.log(payload)
        let data
        if (payload === 'stat1') {
            data = [
                {x: 1, y: 2},
                {x: 2, y: 3},
                {x: 3, y: 5},
                {x: 4, y: 5},
                {x: 5, y: 7}
            ]
        } else if (payload === 'stat2') {
            data = [
                {x: 1, y: 1420},
                {x: 2, y: 2141},
                {x: 3, y: 4125},
                {x: 4, y: 2455},
                {x: 5, y: 8645}
            ]
        } else if (payload === 'stat3') {
            data = [
                {x: 1, y: 4512523},
                {x: 2, y: 6542124},
                {x: 3, y: 2521413},
                {x: 4, y: 5543521},
                {x: 5, y: 9512532}
            ]
        }
        dispatch(changeStat(data))
    }
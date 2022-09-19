const initialState = {
    statCategory: 'stat1',
    data: [
        {x: 1, y: 2241},
        {x: 2, y: 3421},
        {x: 3, y: 5436},
        {x: 4, y: 5235},
        {x: 5, y: 7012}
    ]
}

const CHANGE_STAT = 'CHANGE_STAT'

export const statReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STAT:
            return {...state, data: [...action.payload]}
        default:
            return state
    }
}

export const changeStat = payload => ({type: CHANGE_STAT, payload})
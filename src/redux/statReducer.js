const initialState = {
    statCategory: 'stat1',
    data: [
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 5},
        {x: 4, y: 5},
        {x: 5, y: 7}
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
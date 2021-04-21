

const initialState = {coin: 4}

function getMoney(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'GET_COIN':
            nextState = {
                ...state, 
                coin: action.value
            }
            return nextState || state
    default:
        return state;
    }
}

export default getMoney
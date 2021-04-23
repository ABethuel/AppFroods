

const initialState = {coin: 60}

function getMoney(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'GET_COIN':
            return {
                ...state,
                coin: state.coin - action.value 
            }
            return nextState || state
    default:
        return state;
    }
}

export default getMoney
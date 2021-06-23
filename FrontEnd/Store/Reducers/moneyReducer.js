

const initialState = {coin: 60}

function getMoney(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'COIN_REMOVE':
            return {
                ...state,
                coin: state.coin - action.value 
            }
        case 'COIN_ADD': 
            return {
                ...state,
                coin: state.coin + action.value
            }
    default:
        return state;
    }
}

export default getMoney


const initialState = {coin: 5}

function getMoney(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'GET_COIN':
            const commandMadeIndex = state.commandMade.findIndex(item => item.id === action.value.id)
            if (commandMadeIndex !== -1 ){
                // PLat déjà commandé, on l'annule
                nextState = {
                    ...state,
                    commandMade : state.commandMade.filter( (item, index) => index !== commandMadeIndex)
                }
            }
            else{
                // On ajoute le plat dans la liste des commandes en cours
                nextState = {
                    ...state,
                    commandMade: [...state.commandMade, action.value]
                }
            }
            return nextState || state
    default:
        return state;
    }
}

export default getMoney
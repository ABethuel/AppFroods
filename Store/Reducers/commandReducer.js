// nStore/Reducers/commandReducer.js

const initialState = {commandMade: []}

function toggleCommand(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_COMMAND':
            const commandMadeIndex = state.commandMade.findIndex(item => item.idDish === action.value.idDish)
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

export default toggleCommand
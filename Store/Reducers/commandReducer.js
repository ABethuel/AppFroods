// nStore/Reducers/commandReducer.js

const initialState = {commandMade: []}

function toggleCommand(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_COMMAND':
            const commandMadeIndex = state.commandMade.findIndex(item => item.id === action.value.id)
            if (commandMadeIndex === -1) {
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
// nStore/Reducers/propositionReducer.js

const initialState = {propositionCommand: []}

function toggleProposition(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'TOGGLE_PROPOSITIOn':
        const PropositionIndex = state.propositionCommand.findIndex(item => item.id === action.value.id)
        if (PropositionIndex !== -1) {
          // Le film est déjà dans les favoris, on le supprime de la liste
          nextState = {
            ...state,
            propositionCommand: state.propositionCommand.filter( (item, index) => index !== PropositionIndex)
          }
        }
        else {
          // Le film n'est pas dans les films favoris, on l'ajoute à la liste
          nextState = {
            ...state,
            propositionCommand: [...state.propositionCommand, action.value]
          }
        }
        return nextState || state
    default:
      return state
    }
  }
  

export default toggleProposition
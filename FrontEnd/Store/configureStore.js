import { combineReducers, createStore } from 'redux'
import toggleCommand from './Reducers/commandReducer'
import getMoney from './Reducers/moneyReducer'
import toggleProposition from './Reducers/propositionReducer'

export default createStore(combineReducers({toggleCommand, toggleProposition, getMoney }))
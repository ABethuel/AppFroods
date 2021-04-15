import { combineReducers, createStore } from 'redux'
import toggleCommand from './Reducers/commandReducer'
import getMoney from './Reducers/moneyReducer'

export default createStore(combineReducers({toggleCommand, getMoney}))
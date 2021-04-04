import { createStore } from 'redux'
import toggleCommand from './Reducers/commandReducer'

export default createStore(toggleCommand)
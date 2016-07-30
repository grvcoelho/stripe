import { combineReducers } from 'redux'
import card from './card'
import customer from './customer'
import checkout from './checkout'

const rootReducer = combineReducers({
  card,
  customer,
  checkout
})

export default rootReducer


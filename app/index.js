import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import './styles/'

const checkoutInitialState = {
  email: '',
  amount: '',
  image: ''
}

function checkout(state = checkoutInitialState, action) {
  const { payload, type } = action

  if (action.type === 'CHECKOUT/ADD_EMAIL') {
    return Object.assign({}, state, {
      email: payload
    })
  }

  if (action.type === 'CHECKOUT/ADD_AMOUNT') {
    return Object.assign({}, state, {
      amount: payload
    })
  }

  if (action.type === 'CHECKOUT/ADD_IMAGE') {
    return Object.assign({}, state, {
      image: payload
    })
  }

  return state
}

const creditCardInitialState =  {
  number: '',
  brand: '',
  expirationDate: '',
  cvv: ''
}

function card(state = creditCardInitialState, action) {
  if (action.type === 'CARD/ADD_NUMBER') {
    return Object.assign({}, state, {
      number: payload
    })
  }

  if (action.type === 'CARD/ADD_BRAND') {
    return Object.assign({}, state, {
      brand: payload
    })
  }

  if (action.type === 'CARD/ADD_EXPIRATION_DATE') {
    return Object.assign({}, state, {
      expirationDate: payload
    })
  }

  if (action.type === 'CARD/ADD_CVV') {
    return Object.assign({}, state, {
      cvv: payload
    })
  }

  return state
}

const rootReducer = combineReducers({
  checkout,
  card
})

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  )
}

const store = configureStore()

console.log(store.getState())

import { Component } from 'react'

class CheckoutContainer extends Component {
  render() {
    return (
      <div className="checkout-container">
        <div className="checkout">
          <div className="checkout-header">
            <div className="checkout-image">
              <img src="https://stripe.com/img/checkout/marketing/watsi.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <CheckoutContainer />,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configure-store'
import CheckoutInput from './components/checkout-input'
import CheckoutButton from './components/checkout-button'
import './styles'

const store = configureStore()
store.getState()

const css = {
  height: '460px',
  width: '300px',
  margin: '60px'
}

ReactDOM.render(
  <div style={css}>
    <CheckoutInput placeholder="Email" />
    <CheckoutInput placeholder="Card Number" />
    <CheckoutButton text="Donate $1.00" />
  </div>,
  document.getElementById('app')
)

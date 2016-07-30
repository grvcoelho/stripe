import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configure-store'
import CheckoutButton from './components/checkout-button'
import './styles'

const store = configureStore()
store.getState()

ReactDOM.render(
  <CheckoutButton text="Donate $1.00" />,
  document.getElementById('app')
)

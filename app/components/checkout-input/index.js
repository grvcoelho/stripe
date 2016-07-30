import React, { PropTypes } from 'react'
import './styles'

export default function CheckoutInput(props) {
  return (
    <input className="checkout-input" placeholder={props.placeholder} />
  )
}

CheckoutInput.propTypes = {
  placeholder: PropTypes.string
}

import React, { PropTypes } from 'react'
import './styles'

export default function CheckoutButton(props) {
  return (
    <button className="checkout-button">
      {props.text}
    </button>
  )
}

CheckoutButton.propTypes = {
  text: PropTypes.string.isRequired
}

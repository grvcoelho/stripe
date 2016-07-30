import React from 'react'
import './styles'

export default function CheckoutButton(props) {
  return (
    <button className="checkout-button">
      {props.text}
    </button>
  )
}

CheckoutButton.propTypes = {
  text: React.PropTypes.string.isRequired
}

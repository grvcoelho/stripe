import { merge } from 'ramda'

const initialState = {
  amount: 0
}

export default function checkout(state = initialState, action) {
  const { type, payload } = action

  if (type === 'CHECKOUT/ADD_AMOUNT') {
    return merge(state, { amount: payload })
  }

  return state
}


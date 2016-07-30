import { merge } from 'ramda'

const initialState = {
  email: ''
}

export default function customer(state = initialState, action) {
  const { type, payload } = action

  if (type === 'CUSTOMER/ADD_EMAIL') {
    return merge(state, { email: payload })
  }

  return state
}


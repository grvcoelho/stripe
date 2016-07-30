import { merge } from 'ramda'

const initialState = {
  brand: '',
  number: '',
  expirationDate: '',
  cvv: ''
}

export default function card(state = initialState, action) {
  const { type, payload } = action

  if (type === 'CARD/ADD_BRAND') {
    return merge(state, { brand: payload })
  }

  if (type === 'CARD/ADD_NUMBER') {
    return merge(state, { number: payload })
  }

  if (type === 'CARD/ADD_EXPIRATION_DATE') {
    return merge(state, { expirationDate: payload })
  }

  if (type === 'CARD/ADD_CVV') {
    return merge(state, { cvv: payload })
  }

  return state
}

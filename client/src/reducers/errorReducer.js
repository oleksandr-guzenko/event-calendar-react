import {
  ERRORS,
  NO_ERRORS
} from '../actions/types'

const initialState = {
  errors: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ERRORS:
    return { 
      ...state, 
      errors: payload
    }

  case NO_ERRORS:
    return {
      ...state,
      errors: {}
    }

  default:
    return state
  }
}

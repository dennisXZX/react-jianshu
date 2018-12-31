import { SEARCH_FOCUS, SEARCH_BLUR } from '../actions/actionTypes'

const defaultState = {
  isFocused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        isFocused: true
      }
    case SEARCH_BLUR:
      return {
        isFocused: false
      }
    default:
      return state
  }
}
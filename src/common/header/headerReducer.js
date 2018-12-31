import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  GET_HOT_SEARCH_LIST
} from './headerActions'

const defaultState = {
  isFocused: false,
  hotSearchList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...state,
        isFocused: true
      }
    case SEARCH_BLUR:
      return {
        ...state,
        isFocused: false
      }
    case GET_HOT_SEARCH_LIST:
      return {
        ...state,
        hotSearchList: action.hotSearchList
      }
    default:
      return state
  }
}
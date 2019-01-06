import { CHANGE_LOGIN, CHANGE_LOGOUT } from './loginPageActions'

const defaultState = {
  isLogin: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin
      }
    case CHANGE_LOGOUT:
      return {
        ...state,
        isLogin: action.isLogin
      }
    default:
      return state
  }
}
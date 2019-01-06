import { combineReducers } from 'redux'

import headerReducer from '../common/header/headerReducer'
import homePageReducer from '../pages/home/homePageReducer'
import detailPageReducer from '../pages/detail/detailPageReducer'
import loginPageReducer from '../pages/login/loginPageReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  home: homePageReducer,
  detail: detailPageReducer,
  login: loginPageReducer
})

export default rootReducer
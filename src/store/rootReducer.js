import { combineReducers } from 'redux'

import headerReducer from '../common/header/headerReducer'
import homePageReducer from '../pages/home/homePageReducer'

const rootReducer = combineReducers({
  header: headerReducer,
  home: homePageReducer
})

export default rootReducer
import {
  CHANGE_HOME_DATA
} from './homePageActions'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return {
        ...state,
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      }
    default:
      return state
  }
}
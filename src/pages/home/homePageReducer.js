import {
  CHANGE_HOME_DATA,
  ADD_MORE_LIST
} from './homePageActions'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
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
    case ADD_MORE_LIST:
      return {
        ...state,
        articleList: [...state.articleList, ...action.listData],
        articlePage: action.nextArticlePage
      }
    default:
      return state
  }
}
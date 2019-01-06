import {
  CHANGE_HOME_DATA,
  ADD_MORE_LIST,
  TOGGLE_TOP_SHOW
} from './homePageActions'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
}

const _changeHomeData = (state, action) => {
  return {
    ...state,
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList
  }
}

const _addMoreList = (state, action) => {
  return {
    ...state,
    articleList: [...state.articleList, ...action.listData],
    articlePage: action.nextArticlePage
  }
}

const _toggleTopShow = (state, action) => {
  return {
    ...state,
    showScroll: action.isScrollTopShow
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return _changeHomeData(state, action)
    case ADD_MORE_LIST:
      return _addMoreList(state, action)
    case TOGGLE_TOP_SHOW:
      return _toggleTopShow(state, action)
    default:
      return state
  }
}
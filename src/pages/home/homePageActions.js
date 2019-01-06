import axios from 'axios'

export const CHANGE_HOME_DATA = 'Home.CHANGE_HOME_DATA'
export const ADD_MORE_LIST = 'Home.ADD_MORE_LIST'

const _changeHomeData = (topicList, articleList, recommendList) => ({
  type: CHANGE_HOME_DATA,
  topicList,
  articleList,
  recommendList
})

const _addMoreList = (listData, nextArticlePage) => ({
  type: ADD_MORE_LIST,
  listData,
  nextArticlePage
})

export const getHomePageData = () => (dispatch) => {
  axios.get('api/home.json')
    .then(res => {
      const data = res.data.data
      const { topicList, articleList, recommendList } = data

      dispatch(_changeHomeData(topicList, articleList, recommendList))
    })
    .catch(() => {
      console.log('Get home page data error')
    })
}

export const getMoreList = (articlePage) => (dispatch) => {
  axios.get(`api/homeList.json?page=${articlePage}`)
    .then(res => {
      const listData = res.data.data
      const nextArticlePage = articlePage + 1
      dispatch(_addMoreList(listData, nextArticlePage))
    })
}
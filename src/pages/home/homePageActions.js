import axios from 'axios'

export const CHANGE_HOME_DATA = 'Home.CHANGE_HOME_DATA'

export const _changeHomeData = (topicList, articleList, recommendList) => ({
  type: CHANGE_HOME_DATA,
  topicList,
  articleList,
  recommendList
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
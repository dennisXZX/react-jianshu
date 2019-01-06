import axios from 'axios'

export const GET_DETAIL = 'Detail.GET_DETAIL'

export const getDetail = (articleId) => (dispatch) => {
  axios.get(`/api/detail.json?id=${articleId}`)
    .then(res => {
      const data = res.data.data

      dispatch({
        type: GET_DETAIL,
        data
      })
    })
}
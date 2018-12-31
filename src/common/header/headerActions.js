import axios from 'axios'

export const SEARCH_FOCUS = 'Header.SEARCH_FOCUS'
export const SEARCH_BLUR = 'Header.SEARCH_BLUR'
export const GET_HOT_SEARCH_LIST = 'Header.GET_HOT_SEARCH_LIST'

const _changeList = (hotSearchList) => ({
  type: GET_HOT_SEARCH_LIST,
  hotSearchList
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type: SEARCH_BLUR,
})

export const getHotSearchList = () => (dispatch) => {
  axios.get('api/headerList.json')
    .then((res) => {
      const hotSearchList = res.data.hotSearchList

      dispatch(_changeList(hotSearchList))
    })
    .catch(() => {
      console.log('Get hot search list error')
    })
}
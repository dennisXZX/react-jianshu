import { GET_DETAIL } from './detailPageActions'

const defaultState = {
  title: '',
  content: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        title: action.data.title,
        content: action.data.content
      }
    default:
      return state
  }
}
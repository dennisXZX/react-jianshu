import {

} from './homePageActions'

const defaultState = {
  topicList: [
    {
      id: 1,
      title: 'Society'
    },
    {
      id: 2,
      title: 'Art'
    },
    {
      id: 3,
      title: 'Math'
    },
    {
      id: 4,
      title: 'Programming'
    }
  ]
}

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}
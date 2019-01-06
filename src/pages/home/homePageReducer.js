import {

} from './homePageActions'

import recommendImg from '../../statics/recommend.png'

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
  ],
  articleList: [
    {
      id: 1,
      title: 'Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto at commodi deserunt dolorem, eaque earum error est, exercitationem fugiat'
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto at commodi deserunt dolorem, eaque earum error est, exercitationem fugiat'
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto at commodi deserunt dolorem, eaque earum error est, exercitationem fugiat'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: recommendImg
    },
    {
      id: 2,
      imgUrl: recommendImg
    },
    {
      id: 3,
      imgUrl: recommendImg
    },
    {
      id: 4,
      imgUrl: recommendImg
    },
    {
      id: 5,
      imgUrl: recommendImg
    }
  ]
}

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}
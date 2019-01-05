import React, { Component } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  HomeBanner,
} from './homePageStyle'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <HomeBanner />
          <Topic />
          <List />
        </HomeLeft>

        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home

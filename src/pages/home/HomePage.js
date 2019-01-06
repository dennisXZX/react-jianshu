import React, { Component } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import { getHomePageData } from './homePageActions'

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

  componentDidMount () {
    this.props.getHomePageData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomePageData() {
      dispatch(getHomePageData())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)

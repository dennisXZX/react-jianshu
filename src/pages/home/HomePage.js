import React, { Component } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import { getHomePageData, toggleTopShow } from './homePageActions'

import {
  BackToTop,
  HomeWrapper,
  HomeLeft,
  HomeRight,
  HomeBanner,
} from './homePageStyle'

class Home extends Component {
  handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render () {
    const { showScroll } = this.props

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

        {
          showScroll && (
            <BackToTop
              onClick={this.handleScrollToTop}>
              Top
            </BackToTop>
          )
        }

      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.getHomePageData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.home.showScroll
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getHomePageData () {
      dispatch(getHomePageData())
    },

    changeScrollTopShow () {
      if (document.documentElement.scrollTop > 100) {
        dispatch(toggleTopShow(true))
      } else {
        dispatch(toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as headerActions from './headerActions'

import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchWrapper
} from './headerStyle'

class Header extends Component {
  getCurrentPageItems = () => {
    const {
      hotSearchList,
      currentPage,
    } = this.props

    const pageList = []

    if (hotSearchList.length) {
      for (let i = (currentPage - 1) * 7; i < currentPage * 7; i++) {
        pageList.push(
          <SearchInfoItem key={hotSearchList[i]}>
            {hotSearchList[i]}
          </SearchInfoItem>
        )
      }
    }

    return pageList
  }

  getListArea = () => {
    const {
      isFocused,
      isHotSearchMouseIn,
      handleChangePage,
      handleHotSearchMouseEnter,
      handleHotSearchMouseLeave,
      currentPage,
      totalPage
    } = this.props

    if (isFocused || isHotSearchMouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleHotSearchMouseEnter}
          onMouseLeave={handleHotSearchMouseLeave}
        >
          <SearchInfoTitle>
            Hot Searches
            <SearchInfoSwitch
              onClick={() => handleChangePage(currentPage, totalPage, this.spinIcon)}
            >
              <i
                className="iconfont spin"
                ref={(icon) => {this.spinIcon = icon}}
              >
                &#xe851;
              </i>
              Change
            </SearchInfoSwitch>
            <SearchInfoList>
              {this.getCurrentPageItems()}
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const {
      isFocused,
      handleSearchFocus,
      handleSearchBlur,
      hotSearchList
    } = this.props

    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>

        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <NavSearch
              onFocus={() => handleSearchFocus(hotSearchList)}
              onBlur={handleSearchBlur}
              className={isFocused ? 'focused' : ''}
            />

            <i className={isFocused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60c;
            </i>

            {this.getListArea()}
          </SearchWrapper>

          <Addition>
            <Button className="write">
              <i className="iconfont">&#xe62b;</i> Write
            </Button>
            <Button className="register">Register</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFocused: state.header.isFocused,
    hotSearchList: state.header.hotSearchList,
    currentPage: state.header.currentPage,
    totalPage: state.header.totalPage,
    isHotSearchMouseIn: state.header.isHotSearchMouseIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus (hotSearchList) {
      (hotSearchList.length <= 0) && dispatch(headerActions.getHotSearchList())

      dispatch(headerActions.searchFocus())
    },

    handleSearchBlur () {
      dispatch(headerActions.searchBlur())
    },

    handleHotSearchMouseEnter () {
      dispatch(headerActions.hotSearchMouseEnter())
    },

    handleHotSearchMouseLeave () {
      dispatch(headerActions.hotSearchMouseLeave())
    },

    handleChangePage (currentPage, totalPage, spinIcon) {
      // retrieve the transform rotate value
      const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      // convert it into numeric format
      const originAngleNum = originAngle ? parseInt(originAngle, 10) : 0
      // set the transform rotate value
      spinIcon.style.transform = `rotate(${originAngleNum + 360}deg)`

      if (currentPage < totalPage) {
        dispatch(headerActions.changePage(currentPage + 1))
      } else {
        dispatch(headerActions.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

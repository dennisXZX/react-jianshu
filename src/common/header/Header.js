import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  getListArea = () => {
    const { hotSearchList, isFocused } = this.props

    if (isFocused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Hot Searches
            <SearchInfoSwitch>
              Change
            </SearchInfoSwitch>
            <SearchInfoList>
              {
                hotSearchList.map(hotSearch => (
                  <SearchInfoItem key={hotSearch}>
                    {hotSearch}
                  </SearchInfoItem>
                ))
              }
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
      handleSearchBlur
    } = this.props

    return (
      <HeaderWrapper>
        <Logo />

        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <NavSearch
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className={isFocused ? 'focused' : ''}
            />

            <i className={isFocused ? 'focused iconfont' : 'iconfont'}>
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
    hotSearchList: state.header.hotSearchList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      dispatch(headerActions.getHotSearchList())
      dispatch(headerActions.searchFocus())
    },
    handleSearchBlur() {
      dispatch(headerActions.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

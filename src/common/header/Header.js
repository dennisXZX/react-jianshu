import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

import {
  handleSearchBlur,
  handleSearchFocus
} from './headerActions'

import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper
} from './headerStyle'

class Header extends Component {
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
    isFocused: state.header.isFocused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      handleSearchBlur,
      handleSearchFocus
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

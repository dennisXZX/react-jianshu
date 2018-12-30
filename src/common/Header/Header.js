import React, { Component } from 'react'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper
} from './style'

class Header extends Component {
  render () {
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
            <NavSearch />
            <i className="iconfont">&#xe60c;</i>
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

export default Header

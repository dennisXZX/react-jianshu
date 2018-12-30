import React, { Component } from 'react'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch
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
          <NavItem className="right">Aa</NavItem>

          <NavSearch />

          <Addition>
            <Button className="write">Write</Button>
            <Button className="register">Register</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header

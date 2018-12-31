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
  state = {
    isFocused: false
  }

  handleInputFocus = () => this.setState({ isFocused: true })

  handleInputBlur = () => this.setState({ isFocused: false })

  render () {
    const { isFocused } = this.state

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
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
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

export default Header

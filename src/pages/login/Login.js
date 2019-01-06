import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './loginPageActions'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './loginStyle'

class Login extends Component {
  render () {
    const { login, isLogin } = this.props

    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="account"
              ref={(input) => {this.account = input}} />
            <Input placeholder="password"
                   type='password'
                   ref={(input) => {this.password = input}} />
            <Button onClick={() => login(this.account, this.password)}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }

    return <Redirect to='/' />
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login (accountElem, passwordElem) {
      dispatch(login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

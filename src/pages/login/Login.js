import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './loginStyle'

class Login extends Component {
  render () {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="account" />
          <Input placeholder="password" />
          <Button>Login</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends Component {
  render () {
    const { isLogin } = this.props

    if (isLogin) {
      return (
        <div>Write an article</div>
      )
    }

    return <Redirect to='/login' />
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin
  }
}

export default connect(mapStateToProps, null)(Write)

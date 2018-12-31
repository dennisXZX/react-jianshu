import React, { Component, Fragment } from 'react'
import ResetStyle from './resetStyle'
import GlobalCSS from './globalCSS'
import IconFont from './iconfont/iconfont'

class GlobalStyle extends Component {
  render () {
    return (
      <Fragment>
        {/* injected global styles */}
        <ResetStyle />
        <GlobalCSS />
        <IconFont />
      </Fragment>
    )
  }
}

export default GlobalStyle

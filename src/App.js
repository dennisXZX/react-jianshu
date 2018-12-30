import React, { Component } from 'react';
import ResetStyle from './global-style/resetStyle'
import GlobalStyle from './global-style/globalStyle'
import IconFont from './global-style/iconfont/iconfont'
import Header from './common/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        {/* injected global styles */}
        <ResetStyle />
        <GlobalStyle />
        <IconFont />

        <Header />
      </div>
    );
  }
}

export default App;

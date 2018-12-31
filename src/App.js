import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'

import ResetStyle from './global-style/resetStyle'
import GlobalStyle from './global-style/globalStyle'
import IconFont from './global-style/iconfont/iconfont'
import Header from './common/Header/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* injected global styles */}
          <ResetStyle />
          <GlobalStyle />
          <IconFont />

          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;

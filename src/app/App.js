import React, { Component } from 'react';
import store from '../store/configStore'
import { Provider } from 'react-redux'

import GlobalStyle from '../globalStyle/GlobalStyle'
import Header from '../common/header/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;

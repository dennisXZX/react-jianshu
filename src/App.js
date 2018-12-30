import React, { Component } from 'react';
import ResetStyle from './global-style/resetStyle'
import GlobalStyle from './global-style/globalStyle'
import Header from './common/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <ResetStyle />
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import store from '../store/configStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyle from '../globalStyle/GlobalStyle'
import Header from '../common/header/Header'
import Home from '../pages/home'
import Detail from '../pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

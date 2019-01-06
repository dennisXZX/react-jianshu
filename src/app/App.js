import React, { Component, Fragment } from 'react';
import store from '../store/configStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyle from '../globalStyle/GlobalStyle'
import Header from '../common/header/Header'
import Home from '../pages/home/HomePage'
import Detail from '../pages/detail/DetailPage'
import Login from '../pages/login/Login'
import Write from '../pages/write/Write'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/write' component={Write}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import store from '../store/configStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyle from '../globalStyle/GlobalStyle'
import Header from '../common/header/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' render={() => <div>detail</div>}></Route>
            </Fragment>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/Header';
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

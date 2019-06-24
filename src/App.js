import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/Header';
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write"
import store from './store';
import './statics/css/global.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/layouts/Header';
import AccountPage from './components/account-page/AccountPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account/:action" component={AccountPage} />
          </div>
        </Router>
    );
  }
}
export default App;

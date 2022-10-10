import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";


import store from "./store";
import setAuthToken from './utils/setAuthToken';
import { setUser, logout } from './actions/authActions';
import PrivateRoute from './components/private-route/PrivateRoute';

import Login from './components/auth/Login';
import Verify from './components/auth/Verify';
import Header from './components/layouts/Header';
import AccountPage from './components/account-page/AccountPage';
import EditAccount from './components/account-page/create-account/EditAccount';
import EditEvent from './components/account-page/create-events/EditEvent';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from "./components/auth/ForgotPassword";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logout());

    // Redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/login" component={Login} />
            <Route exact path="/verify/:id" component={Verify} />
            <PrivateRoute exact path="/account/:action" component={AccountPage} />
            <PrivateRoute exact path="/accounts/:id/edit" component={EditAccount} />
            <PrivateRoute exact path="/events/:id/edit" component={EditEvent} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

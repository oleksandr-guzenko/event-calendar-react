import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";


import store from "./store";

import Login from './components/auth/Login';
import Header from './components/layouts/Header';
import AccountPage from './components/account-page/AccountPage';
import Dashboard from './components/dashboard/Dashboard';

// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // Redirect to login
//     window.location.href = "/login";
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account/:action" component={AccountPage} />
            <Route exact path="/" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;

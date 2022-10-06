import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, auth, ...rest }) {
  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, withRouter} from 'react-router-dom';
import classnames from "classnames";

import {logout} from '../../actions/authActions'

function Header(props) {
  const dispatch = useDispatch();
  const {user, isAuthenticated} = useSelector(state => state.auth);
  const pathname = props.history.location.pathname;

  const onLogout = e => {
    dispatch(logout());
  }

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark pr-4 pl-4">
        <Link className="navbar-brand" to="#"><span className="fa fa-calendar"></span>&nbsp; Event Calender</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={classnames('nav-link', {'active': pathname === '/'})} to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className={classnames('nav-link', {'active': pathname.search('/account/') !== -1})} to="/account/create-event">Account</Link>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {!isAuthenticated && (
            <li className="nav-item">
              <Link to="/login" className={classnames('nav-link', {'active': pathname === '/login'})}>Login <span className="fa fa-sign-in"></span></Link>
            </li>
          )}
          {isAuthenticated && (
            <>
              <li className="nav-item">
                <span  className="nav-link"><span className="fa fa-user-circle"></span> {user.name} <span className="badge badge-pill badge-light">{user.role}</span></span>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={onLogout}>Logout <span className="fa fa-sign-out"></span></Link>
              </li>
            </>
          )}
        </ul>
        </div>
    </nav>
  )
}

export default withRouter(Header)
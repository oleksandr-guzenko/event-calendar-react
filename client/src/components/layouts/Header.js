import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import classnames from "classnames";

export class Header extends Component {
  render() {
    const pathname = this.props.history.location.pathname;

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
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}}>
                    Info <span className="fa fa-gear"></span>
                  </span>
                  <div className="dropdown-menu" style={{right: 0, left: 'auto', minWidth: 'auto'}}>
                    <h5 className="dropdown-header"><span className="fa fa-user"></span> Dragon</h5>
                    <Link className="dropdown-item" to="#">Logout <span className="fa fa-sign-out"></span></Link>
                  </div>
                </li>
            </ul>
            </div>
        </nav>
    )
  }
}

export default withRouter(Header)
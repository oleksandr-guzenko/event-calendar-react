import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark pr-4 pl-4">
            <Link className="navbar-brand" to="#"><span className="fa fa-calendar"></span>&nbsp; Event Calender</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}}>
                    Info <span className="fa fa-gear"></span>
                  </span>
                  <div class="dropdown-menu" style={{right: 0, left: 'auto', minWidth: 'auto'}}>
                    <h5 class="dropdown-header"><span className="fa fa-user"></span> Dragon</h5>
                    <Link class="dropdown-item" to="#">Logout <span className="fa fa-sign-out"></span></Link>
                  </div>
                </li>
            </ul>
            </div>
        </nav>
    )
  }
}

export default Header
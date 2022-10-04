import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import classnames from 'classnames';

export class AccountMenu extends Component {
  render() {
    const action = this.props.action;

    return (
        <ul className="nav flex-column nav-pills border-right">
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'create-event'})} to="/account/create-event">
                    <span className="fa fa-calendar-plus-o"></span><span className="d-md-inline d-none">&nbsp; Create New Event</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'cancel-event'})} to="/account/cancel-event">
                    <span className="fa fa-calendar-minus-o"></span><span className="d-md-inline d-none">&nbsp; Cancel Event</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'amend-event'})} to="/account/amend-event">
                    <span className="fa fa-edit"></span><span className="d-md-inline d-none">&nbsp; Amend Event</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'submitted-events'})} to="/account/submitted-events">
                    <span className="fa fa-align-justify"></span><span className="d-md-inline d-none">&nbsp; List Submitted Events</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'prev-events'})} to="/account/prev-events">
                    <span className="fa fa-angle-double-left pr-2"></span><span className="d-md-inline d-none">&nbsp; List Previous Events</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'create-user'})} to="/account/create-user">
                    <span className="fa fa-user-plus"></span><span className="d-md-inline d-none">&nbsp; Create New User</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'create-admin'})} to="/account/create-admin">
                    <span className="fa fa-users"></span><span className="d-md-inline d-none">&nbsp; Create New Admin</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'disable-user'})} to="/account/disable-user">
                    <span className="fa fa-user-times"></span><span className="d-md-inline d-none">&nbsp; Disable User Account</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className={classnames('nav-link', {'active': action === 'disable-admin'})} to="/account/disable-admin">
                    <span className="fa fa-times-circle pr-1"></span><span className="d-md-inline d-none">&nbsp; Disable Admin Account</span>
                </Link>
            </li>
        </ul>
    )
  }
}

export default AccountMenu
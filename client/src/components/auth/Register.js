import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Register extends Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="col-md-10 col-12 mx-auto">
          <h1 className="text-center">Register</h1>
          <div className="form-group">
            <label htmlFor="name">User Name <span className="text-danger">*</span></label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>
            <input type="email" name="email" id="email" className="form-control" />
          </div>
          <div class="form-group">
            <label htmlFor="account-type">Account Type</label>
            <select class="form-control" id="account-type">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-success btn-lg btn-block">Sign Up <span className="fa fa-user-plus"></span></button>
            </div>
            <div className="col-6">
              <Link className="btn btn-outline-primary btn-lg btn-block" to="/login">Sign In <span className="fa fa-sign-in"></span></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Login extends Component {
  onSubmit = e => {
    this.props.history.push('/account/create-event');
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="col-md-10 col-12 mx-auto">
          <h1 className="text-center">Login</h1>
          <div className="form-group">
            <label htmlFor="name">User Name <span className="text-danger">*</span></label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span className="text-danger">*</span></label>
            <input type="password" name="password" id="password" className="form-control" />
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmit}>Sign In <span className="fa fa-sign-in"></span></button>
            </div>
            <div className="col-6">
              <Link className="btn btn-outline-success btn-lg btn-block" to="/register">Sign Up <span className="fa fa-user-plus"></span></Link>
            </div>
          </div>
          <div className="mt-3"><a href="/forgotPassword" onClick={e => e.preventDefault()}>Forgot Your Password?</a></div>
        </div>
      </div>
    )
  }
}

export default Login
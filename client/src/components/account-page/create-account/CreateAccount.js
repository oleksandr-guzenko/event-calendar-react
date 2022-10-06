import React, { Component } from 'react'
import { useSelector } from 'react-redux';

function CreateUser(props) {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="pr-3 pl-3">
      <h1>Create New Account</h1>
      <div className="form-group">
          <label htmlFor="name">User Name <span className="text-danger">*</span></label>
          <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div className="form-group">
          <label htmlFor="email">Email <span className="text-danger">*</span></label>
          <input type="email" name="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
          <label htmlFor="account-type">Account Type</label>
          <select className="form-control" id="account-type">
          <option value="user">User</option>
          {user.role === 'Master' && <option value="admin">Admin</option>}
          </select>
      </div>
      <button className="btn btn-primary">Create New User <span className="fa fa-user-plus"></span></button>
    </div>
  )
}

export default CreateUser
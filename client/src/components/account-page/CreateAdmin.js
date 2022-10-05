import React, { Component } from 'react'

export class CreateAdmin extends Component {
  render() {
    return (
        <div className="pr-3 pl-3">
            <h1>Create New Admin</h1>
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
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <button className="btn btn-primary">Create New Admin <span className="fa fa-users"></span></button>
        </div>
    )
  }
}

export default CreateAdmin
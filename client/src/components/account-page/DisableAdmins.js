import React, { Component } from 'react'

export class DisableAdmins extends Component {
  render() {
    return (
        <div className="pl-3 pr-3">
        <h1>Disable Admin Accounts</h1>
        <table className="table table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Account Name</th>
                <th>Account Email</th>
                <th>Outstanding Events</th>
                <th>Account Type</th>
                <th>Amend</th>
                <th>Disable</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dragon</td>
                <td>asasd@asd.com</td>
                <td>34</td>
                <td className="text-primary"><span className="fa fa-user"></span> User</td>
                <td><button className="btn btn-sm btn-outline-info">Amend <span className="fa fa-edit"></span></button></td>
                <td><button className="btn btn-sm btn-outline-danger">Disable <span className="fa fa-eye-slash"></span></button></td>
            </tr>
            <tr>
                <td>Dragasdon</td>
                <td>assdasd@asd.com</td>
                <td>342</td>
                <td className="text-success"><span className="fa fa-users"></span> Admin</td>
                <td><button className="btn btn-sm btn-outline-info">Amend <span className="fa fa-edit"></span></button></td>
                <td><button className="btn btn-sm btn-outline-danger">Disable <span className="fa fa-eye-slash"></span></button></td>
            </tr>
        </tbody>
        </table>
    </div>
    )
  }
}

export default DisableAdmins
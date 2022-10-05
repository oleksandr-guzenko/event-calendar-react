import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class CancelEvent extends Component {
  cancelEvent = e => {
  }
  render() {
    return (
      <div className="pl-3 pr-3">
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
              Are you sure you want to cancel?
              <div className="clearfix">
                <div className="float-right">
                  <button type="button" className="btn btn-success mr-1" data-dismiss="modal">Yes <span className="fa fa-check"></span></button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">No <span className="fa fa-times"></span></button>
                </div>
              </div>
              </div>
                
            </div>
          </div>
        </div>

        <h1>Cancel Event</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Created By</th>
              <th>Amend</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BrewFest</td>
              <td>02/05/2018</td>
              <td></td>
              <td>john@example.com</td>
              <td><button className="btn btn-outline-info btn-sm">Amend <span className="fa fa-edit"></span></button></td>
              <td><button className="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#myModal">Cancel <span className="fa fa-times"></span></button></td>
            </tr>
            <tr>
              <td>BrewFest</td>
              <td>02/05/2018</td>
              <td></td>
              <td>john@example.com</td>
              <td><button className="btn btn-outline-info btn-sm">Amend <span className="fa fa-edit"></span></button></td>
              <td><button className="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#myModal">Cancel <span className="fa fa-times"></span></button></td>
            </tr>
          </tbody>
        </table>
        </div>
    )
  }
}

export default CancelEvent
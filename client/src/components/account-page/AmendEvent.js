import React, { Component } from 'react'

export class AmendEvent extends Component {
  render() {
    return (
        <div className="pl-3 pr-3">
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
              Are you sure you want to cancel?
              <div className="clearfix">
                <div className="float-right">
                  <button type="button" class="btn btn-success mr-1" data-dismiss="modal">Yes <span className="fa fa-check"></span></button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">No <span className="fa fa-times"></span></button>
                </div>
              </div>
              </div>
                
            </div>
          </div>
        </div>

        <h1>Amend Event</h1>
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

export default AmendEvent
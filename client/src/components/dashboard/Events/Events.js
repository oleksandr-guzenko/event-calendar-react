import React, { Component } from 'react'

export class Events extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
            <thead className="thead-dark">
            <tr>
                <th>Title</th>
                <th style={{width: '100px'}}>Date</th>
                <th style={{width: '250px'}}>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>asdsad</td>
                <td>2012/03/05</td>
                <td>05:30 (GMT-11:00) Pago Pago</td>
            </tr>
            <tr>
                <td>asdsad</td>
                <td>2012/03/05</td>
                <td>05:30 (GMT-11:00) Pago Pago</td>
            </tr>
            <tr>
                <td>asdsad</td>
                <td>2012/03/05</td>
                <td>05:30 (GMT-11:00) Pago Pago</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Events
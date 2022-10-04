import React, { Component } from 'react'

export class PrevEvents extends Component {
  render() {
    return (
        <div className="pl-3 pr-3">
            <h1>Previous Events</h1>
            <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time and Timezone</th>
                    <th>Created date</th>
                    <th>Created By</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BrewFest</td>
                    <td>02/05/2018</td>
                    <td>Tuesday, October 4, 2022 (GMT+3)</td>
                    <td>02/05/2018</td>
                    <td>Dragon</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
  }
}

export default PrevEvents
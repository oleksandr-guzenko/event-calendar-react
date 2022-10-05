import React, { Component } from 'react'

import Events from "./Events/Events";
import Calendar from "./Calendar/Calendar";

export class Dashboard extends Component {
  render() {
    return (
      <div className="mt-5 pr-3 pl-3">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#events">Events</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#calendar">Calendar</a>
            </li>
        </ul>
        <div className="tab-content">
            <div className="tab-pane active pt-5" id="events">
                <Events />
            </div>
            <div className="tab-pane fade pt-5" id="calendar">
                <Calendar />
            </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
import React, { Component } from 'react'

export class CreateEvent extends Component {
  render() {
    return (
      <div className="pr-3 pl-3">
        <h1>Create New Event</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="date">Date of Event <span className="text-danger">*</span></label>
              <input type="date" name="date" id="date" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="time">Time of Event <span className="text-danger">*</span></label>
              <input type="time" name="time" id="time" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="timezone">Timezone of Event <span className="text-danger">*</span></label>
              <input type="timezone" name="timezone" id="timezone" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="timezone">Timezone of Event <span className="text-danger">*</span></label>
              <input type="timezone" name="timezone" id="timezone" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <button className="btn-primary btn">Create New Event <span className="fa fa-plus"></span></button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent
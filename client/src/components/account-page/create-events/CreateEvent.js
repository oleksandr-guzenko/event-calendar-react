import React, { Component } from 'react'
import { TimezoneSelect } from 'timezone-select-js';
import Swal from 'sweetalert2';
import timeZoneConverter from 'time-zone-converter'

export class CreateEvent extends Component {
  constructor() {
    super();

    this.state = {
      selectedTimezone: {},
      optsTZ: {},
      timezones: [],
      addTimezone: false,
      visibleTimezone: false,
      optionalTimezones: []
    };
  }

  create = (e) => {
    document.getElementById('myModal').style.display = 'block';
  }

  setSelectedTimezone = value => {
    if(value !== undefined) this.setState({selectedTimezone: value, addTimezone: true});
  }

  addTimezone = (e) => {
    if(!this.state.visibleTimezone && this.state.optionalTimezones.length === 0) {
      this.setState({visibleTimezone: true});
    }
    else {
      if(Object.keys(this.state.optsTZ).length > 0) {
        let optsTZ = this.state.optionalTimezones;
        let visible = optsTZ.length !== 2;

        optsTZ.push(this.state.optsTZ);

        this.setState({optionalTimezones: optsTZ, visibleTimezone: visible, addTimezone: visible});
      }
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  removeTimezone = index => {
    let optsTZ = this.state.optionalTimezones;
    let visible = optsTZ.length !== 1;

    optsTZ.splice(index, 1);
    this.setState({optionalTimezones: optsTZ, visibleTimezone: visible, addTimezone: true});
  }

  setOptsTZ = (zone) => {
    this.setState({optsTZ: zone});
  }

  accept = e => {
    document.getElementById('myModal').style.display = 'none';

    const timezones = [this.state.selectedTimezone, ...this.state.optionalTimezones];
    const {date, time, title, description} = this.state;
    const originalOffset = this.state.selectedTimezone.offsetValue / 100;
    const datetime = date + ' ' + time;
    let html = 
    `
      <p><strong>Title</strong></p>
      <p>${title}</p>
      <p><strong>Timezones of Event</strong></p>
    `;
    let timezonesHtml = '';

    for(let i = 0; i < timezones.length; i ++) {
      timezonesHtml += `<p>${timeZoneConverter(datetime, originalOffset, timezones[i].offsetValue / 100, 'YYYY/MM/DD hh:mm')} ${timezones[i].label}</p>`;
    }

    html += timezonesHtml;
    html += 
    `
      <p><strong>Description</strong></p>
      <p>${description}</p>
    `;

    // cons

    // const datetime = 
    Swal.fire({
      title: '<h1>Event Created</h1>',
      icon: 'success',
      html: html
    })
  }

  reject = e => {
    document.getElementById('myModal').style.display = 'none';
  }

  render() {
    const optsTZItems = this.state.optionalTimezones.map((zone, index) => {
      const { date, time } = this.state;
      const datetime = `${date} ${time}`;
      const orginalOffset = this.state.selectedTimezone.offsetValue / 100;
      const newOffset = zone.offsetValue / 100;

      const newDateTime = timeZoneConverter(datetime, orginalOffset, newOffset, 'YYYY/MM/DD HH:mm');

      return (
        <li className="list-group-item pl-0" key={`optsTz-${index}`}>
        <div className="clearfix">
          <div className="float-left">{newDateTime} {zone.label}</div>
          <div className="float-right"><span className="fa fa-times text-danger" style={{cursor: 'pointer'}} onClick={e => this.removeTimezone(index)}></span></div>
        </div>
      </li>
      );
    }
      
    );

    return (
      <div className="pr-3 pl-3">
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content shadow-lg">
              <div className="modal-body">
                <h4 className="modal-title"><span className="fa fa-info-circle text-primary"></span> Note</h4>
                <hr />
                <h5>An event has already been created with this date and time. Do you wish to continue?</h5>
                <hr />
                <div className="text-center">
                  <button type="button" className="btn btn-success m-1" onClick={this.accept}>Continue with event creation</button>
                  <button type="button" className="btn btn-danger m-1" onClick={this.reject}>Select new date or time</button>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <h1>Create New Event</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="date">Date of Event <span className="text-danger">*</span></label>
              <input type="date" name="date" id="date" className="form-control" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="time">Time of Event <span className="text-danger">*</span></label>
              <input type="time" name="time" id="time" className="form-control" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="timezone">Timezone of Event <span className="text-danger">*</span></label>
              <TimezoneSelect
                value={this.state.selectedTimezone}
                onChange={this.setSelectedTimezone}
              />
            </div>
            
            <ul className="list-group list-group-flush">
            {
              this.state.optionalTimezones.length > 0 &&
              optsTZItems
            }
            </ul>
            { this.state.visibleTimezone && 
              <div className="mb-2">
                <TimezoneSelect
                  value={this.state.optsTZ}
                  onChange={this.setOptsTZ}
                />
              </div>
            }
            { this.state.addTimezone && <button className="btn btn-secondary rounded-circle btn-sm" onClick={this.addTimezone}><span className="fa fa-plus"></span></button> }
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="title">Title <span className="text-danger">*</span></label>
              <input type="text" name="title" id="title" className="form-control" onChange={this.onChange} />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="description">Description <span className="text-muted">(optional)</span></label>
              <textarea name="description" id="description" rows="5" className="form-control" onChange={this.onChange}></textarea>
            </div>
          </div>
          <div className="col-sm-6">
            <button className="btn-primary btn" onClick={this.create}>Create New Event <span className="fa fa-plus"></span></button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent
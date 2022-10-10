import React, { useState, useEffect } from 'react'
import { TimezoneSelect } from 'timezone-select-js';
import Swal from 'sweetalert2';
import timeZoneConverter from 'time-zone-converter'
import { useDispatch } from 'react-redux'
import { addEvent } from '../../../actions/eventActions'

import TimezoneList from "./TimezoneList";

function CreateEvent(props) {
  const dispatch = useDispatch();
  const [selectedTZ, setSelectedTZ] = useState({});
  const [optsTZ, setOptsTZ] = useState({});
  const [datetime, setDatetime] = useState('');
  const [isVisibleNewTzBtn, setIsVisibleNewTzBtn] = useState(false);
  const [isVisibleNewTz, setIsVisibleNewTz] = useState(false);
  const [timezones, setTimezones] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(Object.keys(selectedTZ).length !== 0) {
      setIsVisibleNewTzBtn(true);

      let updateTimezones = timezones;

      if(timezones.length === 0) updateTimezones.push(selectedTZ);
      else updateTimezones[0] = selectedTZ;

      setTimezones(updateTimezones);
    }
  }, [selectedTZ])

  useEffect(() => {
    if(timezones.length === 4) {
      setIsVisibleNewTz(false);
      setIsVisibleNewTzBtn(false);
    }
  }, [timezones])

  const setVisibleOptsTZ = (e) => {
    if(!isVisibleNewTz) setIsVisibleNewTz(true);
    else if(timezones.length < 4) {
      setTimezones([...timezones, optsTZ]);
    }
  }

  const deleteTZ = (index) => {
    let newTZ = timezones;
    newTZ.splice(index, 1);

    setTimezones([...newTZ]);
    setIsVisibleNewTzBtn(true);

    if(newTZ.length === 1) setIsVisibleNewTz(false);
    else setIsVisibleNewTz(true); 
  }
  
  const onSubmit = e => {
    const baseDatetime = new Date(timeZoneConverter(datetime, selectedTZ.offsetValue / 100, 0, 'YYYY/MM/DD HH:mm')).toLocaleString('en-US').replace(/(.*)\D\d+/, '$1');

    dispatch(addEvent({
      title: title,
      description: description,
      timezones: timezones,
      datetime: baseDatetime
    }));
  }
  
  return (
    <div className="pr-3 pl-3">
      <h1>Create New Event</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="datetime">Date and Time of Event <span className="text-danger">*</span></label>
            <input 
              type="datetime-local" 
              name="datetime" 
              id="datetime" 
              className="form-control" 
              value={datetime} 
              onChange={e => setDatetime(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="timezone">Timezone of Event <span className="text-danger">*</span></label>
            <TimezoneSelect
              value={selectedTZ}
              onChange={setSelectedTZ}
            />
          </div>
        </div>
        <div className="col-12 mb-2">
          { timezones.slice(1, 4).length !== 0 && 
            <TimezoneList datetime={datetime} baseTZ={selectedTZ} items={timezones.slice(1, 4)} deleteTZ={deleteTZ}/>
          }
        </div>
        { isVisibleNewTz && (
          <>
            <div className="col-sm-6">
              <p className="text-muted m-0 pt-2 pb-2">( Optional Timezones )</p>
            </div>
            <div className="col-sm-6 ml-auto mb-3">
              <TimezoneSelect
                value={optsTZ}
                onChange={setOptsTZ}
              />
            </div>
          </>
        )}
        {
          isVisibleNewTzBtn && (
            <div className="clearfix col-12">
              <div className="float-right">
                <button className="btn btn-secondary rounded-circle btn-sm" onClick={e => setVisibleOptsTZ(e)}>
                  <span className="fa fa-plus"></span>
                </button>
              </div>
            </div>
          )
        }
        
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="title">Title <span className="text-danger">*</span></label>
            <input type="text" name="title" id="title" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="description">Description <span className="text-muted">(optional)</span></label>
            <textarea name="description" id="description" rows="5" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <button className="btn-primary btn" onClick={onSubmit}>Create New Event <span className="fa fa-plus"></span></button>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent
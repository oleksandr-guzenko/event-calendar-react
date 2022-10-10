import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import EventTable from "./EventTable";
import {
  getEvents
} from "../../../actions/eventActions";

function ManageEvent() {
  const items = useSelector(state => state.events.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [])

  return (
      <div className="pl-3 pr-3">
        <h1>Manage Events</h1>
        <EventTable items={items} />
      </div>
  )
}

export default ManageEvent
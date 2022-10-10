import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PrevEventTable from "./PrevEventTable";
import {
    getEvents
} from '../../../actions/eventActions'

function PrevEvents() {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <div className="pl-3 pr-3">
            <h1>Previous Events</h1>
            <PrevEventTable items={events}/>
        </div>
    )
}

export default PrevEvents
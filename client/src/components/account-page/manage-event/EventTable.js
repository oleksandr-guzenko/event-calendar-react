import React from 'react'

import EventTableItem from "./EventTableItem";


function EventTable(props) {
    const items = props.items.map(item => 
        <EventTableItem item={item} key={item._id} />
    )

    return (
        <table className="table table-striped">
            <thead className="thead-dark text-center">
                <tr>
                    <th>Title</th>
                    <th>Date and Time</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    )
}

export default EventTable
import React from 'react'
import PrevEventTableItem from "./PrevEventTableItem";

function PrevEventTable(props) {
    const prevEvents = props.items.filter(item => 
        new Date(item.datetime).getTime() < new Date().getTime()
    );

    const items = prevEvents.map(item => 
            <PrevEventTableItem item={item} key={item._id} />
        );

    return (
    <table className="table table-striped text-center">
        <thead className="thead-dark">
            <tr>
                <th>Title</th>
                <th>Date and Time</th>
                <th>Created date</th>
                <th>Created By</th>
            </tr>
        </thead>
        <tbody>
            { items }
        </tbody>
    </table>
    )
}

export default PrevEventTable
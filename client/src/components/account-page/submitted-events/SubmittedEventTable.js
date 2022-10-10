import React from 'react'
import SubmittedEventTableItem from "./SubmittedEventTableItem";

function SubmittedEventTable(props) {
    const items = props.items.map(item => 
            <SubmittedEventTableItem item={item} key={item._id} />
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

export default SubmittedEventTable
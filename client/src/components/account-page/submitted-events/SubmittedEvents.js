import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SubmittedEventTable from "./SubmittedEventTable";
import {
    getEvents
} from '../../../actions/eventActions'

function SubmittedEvents() {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    const export_to_csv = e => {
        let csv = [];
        let rows = events.length;
        csv.push('Title,Date and Time,Created Date,Created By');
        for (var i = 0; i < rows; i++) {
            let row = [];
            
            row.push(events[i].title);
            row.push(new Date(events[i].datetime).toLocaleString('en-ZA').replace(/(.*)\D\d+/, '$1').replace(',', ''));
            row.push(new Date(events[i].timestamps).toLocaleString('en-ZA').replace(/(.*)\D\d+/, '$1').replace(',', ''));
            row.push(events[i].user.name);
            
            csv.push(row.join(","));
        }
    
        // Download CSV
        download_csv(csv.join("\n"), 'table.csv');
    }

    const download_csv = (csv, filename) => {
        let csvFile;
        let downloadLink;

        // CSV FILE
        csvFile = new Blob([csv], {type: "text/csv"});

        // Download link
        downloadLink = document.createElement("a");

        // File name
        downloadLink.download = filename;

        // We have to create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);

        // Make sure that the link is not displayed
        downloadLink.style.display = "none";

        // Add the link to your DOM
        document.body.appendChild(downloadLink);

        // Lanzamos
        downloadLink.click();
    }

    return (
        <div className="pl-3 pr-3">
            <div className="clearfix">
                <div className="float-left">
                    <h1>Submitted Events</h1>
                </div>
                <div className="float-right">
                    <button className="btn btn-outline-secondary" onClick={export_to_csv}>Export to CSV <span className="fa fa-save"></span></button>
                </div>
            </div>
            <SubmittedEventTable items={events}/>
        </div>
    )
}

export default SubmittedEvents
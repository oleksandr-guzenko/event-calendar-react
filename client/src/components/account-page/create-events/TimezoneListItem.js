import React from 'react'
import timeZoneConverter from 'time-zone-converter'

function TimezoneListItem(props) {
    const {datetime, baseTZ} = props;

    const newDatetime = new Date(timeZoneConverter(datetime, baseTZ.offsetValue / 100, props.item.offsetValue / 100, 'YYYY/MM/DD HH:mm')).toLocaleString('en-US', {hour12: true}).replace(/(.*)\D\d+/, '$1');

    return (
        <>
            <li className="list-group-item pt-1 pb-1">
                <div className="clearfix">
                    <div className="float-left">{newDatetime}</div>
                    <div className="float-right">
                        <span className="mr-2">{props.item.label}</span>
                        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={e => props.deleteTZ(props.index + 1)}><span className="fa fa-times"></span></button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default TimezoneListItem
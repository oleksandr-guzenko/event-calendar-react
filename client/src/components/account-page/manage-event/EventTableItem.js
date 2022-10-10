import React from 'react'
import { Link } from 'react-router-dom'
import timeZoneConverter from 'time-zone-converter'
import { clientTz, findTzByName } from 'timezone-select-js';

function EventTableItem(props) {
    const datetime = new Date(props.item.datetime).toLocaleString("en-ZA").replace(/(.*)\D\d+/, '$1');
    const baseTz = findTzByName(clientTz());

    return (
    <tr className="text-center">
        <td>{props.item.title}</td>
        <td>
            {datetime}&nbsp;
            <span type="button" className="text-info" data-toggle="collapse" data-target={`#detail-${props.item._id}`}>detail</span>
            <div id={`detail-${props.item._id}`} className="collapse">
            <ul className="list-group">
                {
                    props.item.timezones.map((zone, index) => 
                        <li className="list-group-item" key={`${props.item._id}-${index}`} style={{fontSize: '14px'}}>
                            <div className="clearfix">
                                <div className="float-left">
                                    {new Date(timeZoneConverter(datetime, baseTz.offsetValue / 100, zone.offsetValue / 100, 'YYYY/MM/DD HH:mm')).toLocaleString('en-US', {hour12: true}).replace(/(.*)\D\d+/, '$1')} 
                                </div>
                                <div className="float-right">
                                    {zone.label}
                                </div>
                            </div>
                        </li>    
                    )
                }
            </ul>
            </div>
        </td>
        <td>{props.item.user.name}</td>
        <td style={{width: '160px'}}>
            <Link className="btn btn-outline-info btn-sm" to={`/events/${props.item._id}/edit`}>Edit <span className="fa fa-edit"></span></Link>
            <Link className="btn btn-outline-danger btn-sm" to="/delete">Delete <span className="fa fa-times"></span></Link>
        </td>
    </tr>
    )
}

export default EventTableItem
import React from 'react'
import TimezoneListItem from "./TimezoneListItem";
import { v4 as uuidv4 } from 'uuid';

function TimezoneList(props) {
    const timezones = props.items.map((item, index) => 
        <TimezoneListItem 
            item={item} 
            index={index} 
            baseTZ={props.baseTZ}
            datetime={props.datetime} 
            key={ uuidv4() } 
            deleteTZ={props.deleteTZ} 
        />
    );

    return (
        <>
            <h5 className="text-center">- Optional Timezones -</h5>
            <ul className="list-group">
               {timezones}
            </ul>
        </>
    )
}

export default TimezoneList
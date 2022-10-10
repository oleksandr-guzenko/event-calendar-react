import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { disableAccount } from '../../../actions/accountActions'

function AccountTableItem(props) {
  const dispatch = useDispatch();
  const events = props.item.events;
  let num_outstanding_events = 0;
  const currentTime = props.currentTime;

  for(let i = 0; i < events.length; i ++) {
    const datetime = new Date(events[i].datetime);

    if(currentTime.getTime() < datetime.getTime()) num_outstanding_events ++;
  }
  
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.email}</td>
      <td>{num_outstanding_events}</td>
      <td><span className="bg-primary text-white pr-2 pl-2 rounded-lg pb-1">{props.item.role}</span></td>
      <td style={{maxWidth: '100px'}}>
        { !props.item.disabled && (
          <>
            <Link className="btn btn-sm btn-outline-info mr-1" to={`/accounts/${props.item._id}/edit`}>Edit <span className="fa fa-edit"></span></Link>
            <button className="btn btn-sm btn-outline-danger"  onClick={e => dispatch(disableAccount(props.item._id))}>Disable <span className="fa fa-eye-slash"></span></button>
          </>
        )}
        { props.item.disabled && (
          <div className="text-center text-muted">Disabled</div>
        )}
      </td>
  </tr>
  )
}

export default AccountTableItem
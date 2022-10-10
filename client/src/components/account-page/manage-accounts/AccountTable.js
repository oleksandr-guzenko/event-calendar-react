import React, {} from 'react'
import AccountTableListItem from "./AccountTableItem";
import { clientTz } from 'timezone-select-js';

function AccountTable(props) {
  const items = props.items.map(item => <AccountTableListItem item={item} key={item._id} clientTz={clientTz()} currentTime={new Date()} />);

  return (
    <table className="table table-striped text-center">
      <thead className="thead-dark">
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Outstanding Events</th>
              <th>Type</th>
              <th style={{maxWidth: '100px'}}>Actions</th>
          </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  )
}

export default AccountTable
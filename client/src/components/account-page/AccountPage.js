import React, { Component } from 'react'

import AccountMenu from './AccountMenu';
import CreateEvent from './CreateEvent';
import CancelEvent from './CancelEvent';
import AmendEvent from './AmendEvent';
import SubmittedEvents from './SubmittedEvents';
import PrevEvents from './PrevEvents';
import CreateUser from './CreateUser';
import CreateAdmin from './CreateAdmin';
import DisableUsers from './DisableUsers';
import DisableAdmins from './DisableAdmins';

export class AccountPage extends Component {
  render() {
    const action = this.props.match.params.action;

    return (
      <div className="mt-3 pl-3">
        <div className="row ml-0 mr-0">
            <div className="col-2 col-md-4 col-lg-3"><AccountMenu action={action} /></div>
            <div className="col-10 col-md-8 col-lg-9">
                { action === 'create-event' && <CreateEvent /> }
                { action === 'cancel-event' && <CancelEvent /> }
                { action === 'amend-event' && <AmendEvent /> }
                { action === 'submitted-events' && <SubmittedEvents /> }
                { action === 'prev-events' && <PrevEvents /> }
                { action === 'create-user' && <CreateUser /> }
                { action === 'create-admin' && <CreateAdmin /> }
                { action === 'disable-user' && <DisableUsers /> }
                { action === 'disable-admin' && <DisableAdmins /> }
            </div>
        </div>
      </div>
    )
  }
}

export default AccountPage
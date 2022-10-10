import React, { Component } from 'react'

import AccountMenu from './AccountMenu';
import CreateEvent from './create-events/CreateEvent';
import ManageEvent from './manage-event/ManageEvent';
import SubmittedEvents from './submitted-events/SubmittedEvents';
import PrevEvents from './prev-events/PrevEvents';
import CreateAccount from './create-account/CreateAccount';
import DisableAccount from './manage-accounts/DisableAccount';

export class AccountPage extends Component {
  render() {
    const action = this.props.match.params.action;

    return (
      <div className="mt-3 pl-3">
        <div className="row ml-0 mr-0">
            <div className="col-2 col-md-4 col-lg-3"><AccountMenu action={action} /></div>
            <div className="col-10 col-md-8 col-lg-9">
                { action === 'create-event' && <CreateEvent /> }
                { action === 'manage-event' && <ManageEvent /> }
                { action === 'submitted-events' && <SubmittedEvents /> }
                { action === 'prev-events' && <PrevEvents /> }
                { action === 'create-account' && <CreateAccount /> }
                { action === 'disable-account' && <DisableAccount /> }
            </div>
        </div>
      </div>
    )
  }
}

export default AccountPage
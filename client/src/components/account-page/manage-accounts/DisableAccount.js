import React, { useEffect }from 'react'
import {useDispatch, useSelector} from "react-redux";
// import { Link } from 'react-router-dom'

import './style.css'
import {
    getAccounts
} from '../../../actions/accountActions'
import AccountTable from "./AccountTable";

function DisableUsers() {
    const dispatch = useDispatch();
    const accounts = useSelector(state => state.accounts.accounts);

    useEffect(() => {
        dispatch(getAccounts());
    }, []);

    return (
        <div className="pl-3 pr-3">
            <h1>Manage Accounts</h1>
            <AccountTable items={accounts} />
        </div>
    )
}

export default DisableUsers
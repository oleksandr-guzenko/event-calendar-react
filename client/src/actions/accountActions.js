import axios from 'axios';

import {
    ADD_ACCOUNT,
    GET_ACCOUNTS,
    GET_ACCOUNT,
} from './types'
import api from '../utils/api';

export const addAccount = (newUser) => dispatch => {
    axios
        .post(api.addAccount, newUser)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const getAccounts = () => dispatch => {
    axios
        .get(api.addAccount)
        .then(res => {
            dispatch({
                type: GET_ACCOUNTS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

export const disableAccount = id => dispatch => {
    axios
        .post(api.disableAccount(id))
        .then(res => {
            dispatch({
                type: GET_ACCOUNTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const getAccount = id => dispatch => {
    axios
        .get(api.getAccount(id))
        .then(res => dispatch({
            type: GET_ACCOUNT,
            payload: res.data
        }))
        .catch(err => console.log(err));
}

export const updateAccount = ({id, name, email, role, history}) => dispatch => {
    axios
        .put(api.updateAccount(id), {
            name: name,
            email: email,
            role: role,
        })
        .then(res => {
            dispatch({
                type: GET_ACCOUNTS,
                payload: res.data
            });

            history.push('/account/disable-account');
        })
        .catch(err => console.log(err));
}
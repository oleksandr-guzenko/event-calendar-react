import axios from 'axios'
import jwt_decode from 'jwt-decode'

import {
    LOGOUT,
    SET_USER,
    ERRORS,
    NO_ERRORS
} from './types'
import api from '../utils/api'
import setAuthToken from '../utils/setAuthToken'

export const login = userData => dispatch => {
    axios
        .post(api.login, userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);

            setAuthToken(token);
            const decoded = jwt_decode(token);
            
            dispatch({
                type: NO_ERRORS, 
                payload: {}
            });

            dispatch(setUser(decoded));
            userData.history.push('/account/create-event');
        })
        .catch(err => dispatch({
            type: ERRORS,
            payload: err.response.data
        }));
}

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    });
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch({
        type: LOGOUT,
        payload: null
    });
}

export const verify = data => dispatch => {
    axios
        .post(api.verify(data.id), data.password)
        .then(res => dispatch(setUser(res.data)))
        .catch(err => console.log(err));
}
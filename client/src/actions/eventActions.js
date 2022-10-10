import axios from 'axios'

import {
    ADD_EVENT,
    GET_EVENTS,
    GET_EVENT
} from './types'

import api from '../utils/api';

export const addEvent = newEvent => dispatch => {
    axios
        .post(api.addEvent, newEvent)
        .then(res => dispatch({
            type: ADD_EVENT,
            payload: res.data
            })
        )
        .catch(err => console.log(err));
}

export const getEvents = () => dispatch => {
    axios
        .get(api.getEvents)
        .then(res => dispatch({
                type: GET_EVENTS,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
}

export const getEvent = id => dispatch => {
    axios
        .get(api.getEvent(id))
        .then(res => dispatch({
                type: GET_EVENT,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
}

export const updateEvent = ({title, description, timezones, datetime, id, history}) => dispatch => {
    axios
        .put(api.updateEvent(id), {title, description, timezones, datetime})
        .then(res => {
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            });
            history.push('/account/manage-event');
        })
        .catch(err => console.log(err));
}
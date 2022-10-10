import axios from 'axios';

import {
    ADD_EVENT,
    GET_EVENTS,
    GET_EVENT
} from '../actions/types'

const initialState = {
    events: [],
    event: {},
    loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
        return { 
            ...state,
            events: [...state.events, payload]
        }

    case GET_EVENTS:
        return { 
            ...state,
            events: payload
        }

    case GET_EVENT:
        return { 
            ...state,
            event: payload
        }
    

    default:
        return state
  }
}

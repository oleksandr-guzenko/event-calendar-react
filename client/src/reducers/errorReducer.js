import { ERRORS } from '../actions/types';

const initialState = {
    errors: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ERRORS: 
            return {
                ...state,
                errors: action.payload
            }

        default: 
            return state
    }
}
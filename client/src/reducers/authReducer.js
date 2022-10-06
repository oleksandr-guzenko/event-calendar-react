import {
    LOGOUT,
    SET_USER
} from '../actions/types'

const initialState = {
    user: {},
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }

        case LOGOUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            }

        default:
            return state
    }
}

export default authReducer;
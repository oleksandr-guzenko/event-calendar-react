import {
    ADD_ACCOUNT,
    GET_ACCOUNTS,
    GET_ACCOUNT
} from '../actions/types';

const initialState = {
    accounts: [],
    account: {},
    loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ACCOUNT:
        return { 
            ...state, 
            accounts: [ ...state.accounts, payload]
        }
    
    case GET_ACCOUNTS:
        return { 
            ...state, 
            accounts: payload
        }   

    case GET_ACCOUNT:
        return { 
            ...state, 
            account: payload
        }

    default:
        return state
  }
}

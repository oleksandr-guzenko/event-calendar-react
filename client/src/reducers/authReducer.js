import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import api from '../utils/api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuthenticated: false
  },
  reducers: {
    login: (state, action) => {
        // console.log(userData);
        axios
            .post(api.login, action.payload)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem("jwtToken", token);

                setAuthToken(token);
                const decoded = jwt_decode(token);

                state.user = decoded;
                state.isAuthenticated = true;
            })
            .catch(err => console.log(err));
    },
    logout: (state) => {
        state.user = {};
        state.isAuthenticated = false;
    },
    setCurrentUser: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    login, 
    logout, 
    setCurrentUser 
} = authSlice.actions

export default authSlice.reducer
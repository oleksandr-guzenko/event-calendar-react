import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from "classnames";
import { Link } from "react-router-dom";

import {  login } from '../../actions/authActions';

const Login = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.errors);

  const onSubmit = e => {
    const history = props.history;
    dispatch(login({name, password, history}));
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="col-md-10 col-12 mx-auto">
        <h1 className="text-center">Login</h1>
        <div className="form-group">
          <label htmlFor="name">User Name <span className="text-danger">*</span></label>
          <input type="text" name="name" id="name" className={classnames('form-control', {'border-danger': errors.name})} 
            onChange={e => setName(e.target.value)}
          />
          { errors.name && <p className="text-danger">{errors.name}</p> }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password <span className="text-danger">*</span></label>
          <input type="password" name="password" id="password" className={classnames('form-control', {'border-danger': errors.password})}
            onChange={e => setPassword(e.target.value)} />
          { errors.password && <p className="text-danger">{errors.password}</p> }
        </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={onSubmit}>Sign In <span className="fa fa-sign-in"></span></button>
        <div className="mt-3"><Link to="/forgot-password">Forgot Your Password?</Link></div>
      </div>
    </div>
  )
}

export default Login


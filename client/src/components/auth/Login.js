import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../reducers/authReducer';

const Login = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    dispatch(login({name, password}));
    props.history.push('/account/create-event');
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="col-md-10 col-12 mx-auto">
        <h1 className="text-center">Login</h1>
        <div className="form-group">
          <label htmlFor="name">User Name <span className="text-danger">*</span></label>
          <input type="text" name="name" id="name" className="form-control" 
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password <span className="text-danger">*</span></label>
          <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} />
        </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={onSubmit}>Sign In <span className="fa fa-sign-in"></span></button>
        <div className="mt-3"><a href="/forgotPassword" onClick={e => e.preventDefault()}>Forgot Your Password?</a></div>
      </div>
    </div>
  )
}

export default Login


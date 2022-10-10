import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addAccount } from '../../../actions/accountActions'

function CreateUser(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');

  const onSubmit = e => {
    dispatch(addAccount({name, email, role}));
  }

  return (
    <div className="pr-3 pl-3">
      <h1>Create New Account</h1>
      <div className="form-group">
          <label htmlFor="name">User Name <span className="text-danger">*</span></label>
          <input type="text" name="name" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="form-group">
          <label htmlFor="email">Email <span className="text-danger">*</span></label>
          <input type="email" name="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
          <label htmlFor="account-type">Account Type <span className="text-danger">*</span></label>
          <select className="form-control" id="account-type" value={role} onChange={e => setRole(e.target.value)}>
          <option value="User">User</option>
          {user.role === 'Master' && <option value="Admin">Admin</option>}
          </select>
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>Create New User <span className="fa fa-user-plus"></span></button>
    </div>
  )
}

export default CreateUser
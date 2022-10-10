import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getAccount, updateAccount } from '../../../actions/accountActions'

function EditAccount(props) {
  const dispatch = useDispatch();
  const { user, account } = useSelector(state => ({
        user: state.auth,
        account: state.accounts.account
    }));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const onSubmit = e => {
    dispatch(updateAccount({
        id: props.match.params.id, 
        name: name,
        email: email,
        role: role,
        history: props.history
    }));
  }

  useEffect(() => {
    dispatch(getAccount(props.match.params.id));
  }, [])

  useEffect(() => {
    setName(account.name);
    setEmail(account.email);
    setRole(account.role);
  }, [account])

  return (
    <div className="container">
        <div className="p-5 mt-5">
          <h1 className="text-center">Edit Account</h1>
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
              <option value="User" selected={role === 'User'}>User</option>
              {user.role === 'Master' && <option value="Admin" selected={role === 'Admin'}>Admin</option>}
              </select>
          </div>
          <button className="btn btn-primary" onClick={onSubmit}>Save</button>
        </div>
    </div>
  )
}

export default EditAccount
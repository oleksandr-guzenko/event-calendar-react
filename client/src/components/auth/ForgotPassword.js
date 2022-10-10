import React, { useState } from 'react'
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const sendRequest = e => {
        axios
            .post('/auth/reset-password', {email})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="col-md-8 mx-auto">
                <div className="pt-5 mt-5">
                    <h1 className="text-center">Reset your password</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className="text-danger">*</span></label>
                        <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-block btn-primary" onClick={sendRequest}>Send an email</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
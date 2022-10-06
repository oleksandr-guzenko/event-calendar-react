import React, {useState, useEffect} from 'react'
import axios from 'axios';

import api from '../../utils/api'

function verify(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userId = props.match.params.id;

    useEffect(() => {
        axios
            .get(api.getVerified(userId))
            .then(res => {
                if(res.data) props.history.push('/');
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container">
            <div className="col-lg-8 mx-auto mt-5 pt-5">
                <h1 className="text-center">Verify your account</h1>
                <div className="form-group">
                    <label htmlFor="password">
                        Password <span className="text-danger">*</span>
                    </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm">
                        Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input type="password" name="password-confirm" id="password-confirm" className="form-control" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <button className="btn btn-block btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default verify
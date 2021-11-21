import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import axios from "axios";
import '../../App.css';
import './../login.css';

const Login = () => {

    let history = useHistory();
    //const [userInfo, setUserInfo] = useState(initialUserState);    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    // Sends user input to backend and checks response
    const checkUserInfo = async () => {
        console.log(username);
        console.log(password);
        const result =  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        };
        const response = await fetch(`http://localhost:8000/api/restaurant`, result);
        const body = await response.json();
        console.log(body);
        if(body.message == "error") {
            alert("Invalid Entry.");
            console.log("Invalid Entry.");
        } else {
            alert("Success");
            history.push(`/dashboard/${username}`);
        }

    }

    // prevents submit refresh
    const handleSubmit = (event) => {
        event.preventDefault();

        // alert("username:" + username + " password:" + password);
    }


    return (
        <form className="Login" onSubmit={handleSubmit}>
            <div className='form-group row'>
                <label className="col-sm-2 col-form label">Email</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setUsername(event.target.value)} value={username} className="form-control" placeholder="email@example.com" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" onChange={event => setPassword(event.target.value)} value={password} className="form-control" id="inputPassword" placeholder="Password" />
                </div>
            </div>
            <button onClick={() => checkUserInfo()} className="btn btn-primary">Submit</button>
            <Link to="/sign-up" className="new-user">New user? Create Account</Link>
            <Link to="/reservations" className="new-user">Continue as Guest</Link>
        </form>
    )
}

export default Login

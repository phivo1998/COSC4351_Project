import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import axios from "axios";
import http from "../../http-common.js"
import '../../App.css';
import './../login.css';





const Login = (props) => {

    
    

    let history = useHistory();
    //const [userInfo, setUserInfo] = useState(initialUserState);    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    
    

    // Sends user input to backend and checks response
    const checkUserInfo = async (event) => {
        console.log(username);
        console.log(password);
        try{
            //localhost will be replcaed with web hosted url
            const httpResponse = await http.get(`users?email=${username}`)
            console.log(`${JSON.stringify(httpResponse)}`)
            const body = httpResponse
            
            if(body.data.total_users === 0 || body.data.users[0].password !== password) {
                console.log("Invalid Entry");
                throw new Error('Invalid Entry')

            } else {
                //props.login(username)
                alert("Success");
                //props.history.push(`/dashboard/${body.data.users[0].first_name}`);
                history.push(`/dashboard/${body.data.users[0].first_name}`);
            }

            
            


        }catch(e){
            
            alert(`Invaild username/password: ${e}`)
            //window.location = '/login'
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

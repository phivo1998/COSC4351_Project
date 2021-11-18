import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import './../login.css';

export default function Login(){
    return (
    <form className="Login">
      <div className='form-group row'>
          <label for='staticEmail' className="col-sm-2 col-form label">Email</label>
          <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="email@example.com"/>
          </div>
      </div>
      <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
      </div>
      <button className="btn btn-primary">Submit</button>
      <Link to="/sign-up" className="new-user">New user? Create Account</Link>
      <Link to="/reservations" className="new-user">Continue as Guest</Link>
  </form>
    )
}
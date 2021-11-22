import React, { useState } from 'react';
import '../../App.css';
import './../login.css';


export default class SignUp extends React.Component{
    
    handleSubmit = (event) =>{

    }
    render(){
        return (
            <form className="Login">
            <div className="form-group row">
                 <label for="inputPassword" className="col-sm-2 col-form-label">First Name</label>
                 <div className="col-sm-10">
                     <input type="firstName" className="form-control" id="inputFirst" placeholder="First Name" />
                 </div>
             </div>
             <div className="form-group row">
                 <label for="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                 <div className="col-sm-10">
                     <input type="lastName" className="form-control" id="inputLast" placeholder="Last Name" />
                 </div>
             </div>
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
             <div className="form-group row">
                 <label for="inputPhone" className="col-sm-2 col-form-label">Phone Number</label>
                 <div className="col-sm-10">
                     <input type="phone" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                 </div>
             </div>
             <button className="btn btn-primary" id="signUp">Sign Up</button>
             
         </form>
        )
    }
}


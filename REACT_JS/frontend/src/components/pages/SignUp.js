import React, { useState } from 'react';
import '../../App.css';
import './../login.css';
import Dashboard from './dashboard';
import http from "../../http-common.js"



export default class SignUp extends React.Component{

    
    constructor(props){
        super(props)
        this.state={
            first_name: '',
            last_name: '',
            email:'',
            password:'',
            phoneNumber: '',

        }
    }
    
    handleSubmit = () =>{
        try{
        const results = JSON.stringify(this.state)
        
        const res = http.post('/addUser',results)
        console.log(results)
        alert(results)
        //Not sure what to do after sign up, thinking about implementing props to automate login
        //We can just use the email in the url parameters for getting requests since it's unique as well
        //window.location = `/dashboard/${this.state.email}`
        }catch(e){
            alert(e)
            
        }
        
    }

    onChange(id, value){
        
        switch(id){
            case "inputFirst":
                this.setState({first_name:value})

                break
            case "inputLast":
                this.setState({last_name:value})
                break
            case "inputEmail":
                this.setState({email:value})
                break
            case "inputPassword":
                this.setState({password:value})
                break
            case "inputPhone":
                this.setState({phoneNumber:value})
                break
            default:
                break
        }
    }

    render(){
        return (
            <form className="Login">
            <div className="form-group row">
                 <label for="inputPassword" className="col-sm-2 col-form-label">First Name</label>
                 <div className="col-sm-10">
                     <input onChange={e=>this.onChange(e.target.id,e.target.value)} type="firstName" className="form-control" id="inputFirst" placeholder="First Name" />
                 </div>
             </div>
             <div className="form-group row">
                 <label for="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                 <div className="col-sm-10">
                     <input onChange={e=>this.onChange(e.target.id,e.target.value)}  type="lastName" className="form-control" id="inputLast" placeholder="Last Name" />
                 </div>
             </div>
             <div className='form-group row'>
                 <label for='staticEmail' className="col-sm-2 col-form label">Email</label>
                 <div className="col-sm-10">
                     <input onChange={e=>this.onChange(e.target.id,e.target.value)} type="text" className="form-control" id="inputEmail" placeholder="email@example.com"/>
                 </div>
             </div>
             <div className="form-group row">
                 <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                 <div className="col-sm-10">
                     <input onChange={e=>this.onChange(e.target.id,e.target.value)} type="password" className="form-control" id="inputPassword" placeholder="Password" />
                 </div>
             </div>
             <div className="form-group row">
                 <label for="inputPhone" className="col-sm-2 col-form-label">Phone Number</label>
                 <div className="col-sm-10">
                     <input onChange={e=>this.onChange(e.target.id,e.target.value)} type="phone" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                 </div>
             </div>
             <button onClick={this.handleSubmit} className="btn btn-primary" id="signUp">Sign Up</button>
             
         </form>
        )
    }
}


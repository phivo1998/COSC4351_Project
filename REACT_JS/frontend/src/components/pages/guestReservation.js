import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"
import '../../App.css';
import './../login.css';
import './../userReservation.css';

const GuestReservation = () => {
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 30), 16));
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [guests, setGuests] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    
    const checkUserInfo = async (event) => {
        
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
        <form className="reserve" onSubmit={handleSubmit}>
           <div className='form-group row'>
                <label className="col-sm-2 col-form label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setFirstname(event.target.value)} value={firstname} className="form-control" placeholder="First Name" />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setLastname(event.target.value)} value={lastname} className="form-control" placeholder="Last Name" />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form label">Number of Guests</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setGuests(event.target.value)} value={guests} className="form-control" placeholder="2, 4, 6, etc." />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form label">Email</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setEmail(event.target.value)} value={email} className="form-control" placeholder="someone@example.com" />
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form label">Phone Number</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setPhonenumber(event.target.value)} value={phonenumber} className="form-control" placeholder="123-456-7890" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pick Date and Time</label>
                <div>
                <DatePicker selected={date} onChange={(date) => setDate(date)} 
                showTimeSelect
                timeFormat="HH:mm"
                injectTimes={[
                  setHours(setMinutes(new Date(), 1), 0),
                  setHours(setMinutes(new Date(), 5), 12),
                  setHours(setMinutes(new Date(), 59), 23),
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"/>
                </div>
            </div>
            {console.log(date)}
            <Link to={{
                pathname: '/confirmation' ,
                state: {
                    firstname: firstname,
                    lastname: lastname,
                    guests: guests,
                    phonenumber: phonenumber,
                    email: email,
                    date: date
                }
            }}>
            <button onClick={() => checkUserInfo()} className="btn btn-primary">Submit</button>
            </Link>
        </form>
    )
}

export default GuestReservation
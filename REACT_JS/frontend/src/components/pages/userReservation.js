import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { Link, useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"
import '../../App.css';
import './../login.css';
import './../userReservation.css';



const UserReservation = () => {
    
    //const [username, setUsername] = useState('');
    const [guests, setGuests] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    let {username} = useParams();
    let userError = '';
    console.log(username)
    

    const [date, setDate] = useState(setHours(setMinutes(new Date(), 30), 16));
    
    const checkReservation = async(event) => {
        try{
            
            console.log(moment(date).format())
            const httpRes = await http.get(`/reservations?date=${moment(date).format()}`)
            const body = httpRes.data
            console.log(body)
            const httpTables = await http.get(`/tables`)
            const Tbody = httpTables.data
            var sum = 0
            console.log(Tbody.tables[0].quantity)
            for(let i = 0; i < Tbody.tables.length; i++){
                sum = sum + Number(Tbody.tables[i].quantity)
            }
            console.log(`total capacity: ${sum}`)
            for(let x = 0; x < body.reservations.length; x++){
                sum = sum - body.reservations[x].guestNum

                

            }
            console.log(`capacity left for the day: ${sum}`)
            

            // const httpResponse = await http.post(`reservationCheck`, {
            //     date: date.toString()
            // })
            // console.log(httpResponse)
            // if (httpResponse.data.isPresent == true) {
            //     event.preventDefault();
            //     userError = 'date present in system'
            // } else {
                

            // }
        }
        catch(e) {

        }
    }

    
    return (
        <form className="reserve">
           <div className='form-group row'>
                <label className="col-sm-2 col-form label">Number of Guests</label>
                <div className="col-sm-10">
                    <input type="text" onChange={event => setGuests(event.target.value)} value={guests} className="form-control" placeholder="2, 4, 6, etc." />
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pick Date and Time</label>
                <div>
                <DatePicker  selected={date} onChange={(date)=> setDate(date)} minDate={moment().toDate()}
                 
                showTimeSelect
                timeFormat="HH:mm"
                injectTimes={[
                  setHours(setMinutes(new Date(), 1), 0),
                  setHours(setMinutes(new Date(), 5), 12),
                  setHours(setMinutes(new Date(), 59), 23),
                ]}
                dateFormat="MMMM d, yyyy h:mm"/>
                </div>
            </div>
            {console.log(date)}
            <Link to={{
                pathname: `/confirmation/${username}`,
                state: {
                    
                    guests: guests,
                    date: date
                }
            }}>
            <button onClick={() => checkReservation()} className="btn btn-primary">Submit</button>
            </Link>
        </form>
    )
}

export default UserReservation
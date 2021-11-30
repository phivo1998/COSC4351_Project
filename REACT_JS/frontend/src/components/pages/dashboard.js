import React from 'react'
import { useParams, Link } from 'react-router-dom'

import http from '../../http-common.js'

class Dashboard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            reservations: []
        }
    }

    componentDidMount() {
        this.Reservations()
    }


    Reservations = async () => {
        try {
            const httpResponse = await http.get(`/reservations?email=${this.props.user}`)
            console.log(`Current reservations: ${JSON.stringify(httpResponse)}`)
            const Results = httpResponse.data
            this.setState({
                reservations: Results
            })

            console.log(`current state: ${this.state.reservations.reservations[0].first_name}`)
        } catch (e) {
            console.log(`${e}`)
        }

    }



    render() {
        const reservation = this.state.reservations.reservations?.map((res, i) => (


            <div class="form-check ml-3">
                <div class="just-padding" key={i}>
                    <div class="list-group list-group-root well"  >

                        <input class="form-check-input list-group-item" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Reservation #{i}:<br />
                            First Name: {res.first_name}<br />
                            Last Name: {res.last_name}<br />
                            Phone Number: {res.phoneNumber}<br />
                            E-mail: {res.email}<br />
                            Guests#: {res.guestNum}<br />
                            Reservation Date: {res.date}
                        </label>

                    </div>

                </div>
            </div>


        ))







        return (
            <>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}> Welcome {this.props.username}!!!</h1>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button type="button" style={{ marginRight: '5px', }} className="btn btn-secondary">Booking</button>
                        <button type="button" style={{ marginRight: '5px' }} className="btn btn-secondary">Edit Profile</button>
                        <Link to="/login">
                            <button type="button" className="btn btn-secondary">Logout</button>
                        </Link>
                    </div>
                    <br></br>
                    <div>
                        Current Reservation:


                    </div>

                    <div>{reservation}</div>
                </div>
            </>
        )
    }
}

export default Dashboard

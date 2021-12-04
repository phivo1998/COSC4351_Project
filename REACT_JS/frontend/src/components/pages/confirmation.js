import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"

const Confirmation = (props) => {
    const email = props.user
    const { username } = useParams()
    const location = useLocation()
    const data = location.state

    //     const Container = styled.div`
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         height: 100vh;
    // `;

    //     const Button = styled.button`
    //         min-width: 100px;
    //         padding: 16px 32px;
    //         border-radius: 4px;
    //         border: none;
    //         background: #141414;
    //         color: #fff;
    //         font-size: 24px;
    //         cursor: pointer;
    // `;
    const postReservation = async (event) => {
        
        //localhost will be replcaed with web hosted url

        if (username) {
            console.log(`data for user: ${JSON.stringify(data)}`)
            const user = await http.get(`/users?email=${email}`)
            const body = user.data
                        
            console.log(`confirmation for ${user.data.users[0]}`)
           //still working on
            const httpResponse = await http.post(`/reservations`, {
                first_name: body.users[0].first_name,
                last_name: body.users[0].last_name,
                phoneNumber: body.users[0].phoneNumber,
                email:email,
                guestNum: data.guests,
                date: data.date

            })
        } else {
            console.log(`data for guest: ${data}`)
            const httpResponse = await http.post(`/reservations`, {
                // need to add these attributes to the backend
                 first_name: data.firstname,
                 last_name: data.lastname,
                 phoneNumber: data.phonenumber,
                 email: data.email,
                 guestNum: data.guests,
                 date: data.date.toString()

             })
        }

    }
    const cancelButton= ()=>{
        if(username){
            return(
                <Link to={{pathname: `/dashboard/${username}`}}  >
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Link>
            )
            
        }else{
            return(
                <Link to={{pathname: `/`}}  >
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Link>
            )
        }
    }

    return (
        <div>
            <Row className="text-center">
                <Col>
                    <p className="confirmation-header">Confirm Your Reservation</p>
                    <p className="confirmation-subtext">
                        Please review the following reservation you have requested:
                    </p>
                    <p>
                        Number of Guests: {data.guests}
                    </p><br />
                    <p>
                        Date and Time: {data.date.toString(0)}
                    </p><br />
                    <Link to={{
                        pathname: `/thankyou/${username}`,
                        state: {
                            guests: data.guests,
                            date: data.date
                        }
                    }}>
                        <button type="button" onClick={() => postReservation()} style={{ marginRight: '5px' }} className="btn btn-primary">Confirm</button>
                    </Link>
                    
                    {cancelButton()}
                    
                </Col>
            </Row>
        </div>
    )
}

export default Confirmation

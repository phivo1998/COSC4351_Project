import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"

const Confirmation = () => {

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
            console.log("slut")
            const httpResponse = await http.post(`reservations`, {
                email: username,
                guestNum: data.guestNum,
                date: data.date

            })
        } else {
            console.log("SINAISAWHORE")
            const httpResponse = await http.post(`reservations`, {
                // need to add these attributes to the backend
                first_name: data.first_name,
                last_name: data.last_name,
                phone_number: data.phone_number,
                email: data.email,
                guestNum: data.guestNum,
                date: data.date

            })
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
                        {username}
                    </p><br />
                    <Link to={{
                        pathname: `/thankyou/${username}`,
                        state: {
                            guestNum: 18,
                            date: "data.date"
                        }
                    }}>
                        <button type="button" onClick={() => postReservation()} style={{ marginRight: '5px' }} className="btn btn-primary">Confirm</button>
                    </Link>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Col>
            </Row>
        </div>
    )
}

export default Confirmation

import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"

const ThankYou = () => {

    const location = useLocation()
    const data = location.state
    const {username} = useParams()

    console.log(data.guests)
    //console.log(data)

    return (
        <div>
            <Row className="text-center">
                <Col>
                    <h1 className="thankyou-header">Thank You!</h1>
                    <p className="thankyou-subtext">
                        Don't forget to remember the time and date. Not being present for the reservation
                        will place a fee of <strong>$10</strong>
                        <br/>
                        You may also print this page for reference:
                        <br/>
                        Date: {data.date.toString()}
                        <br/>
                        Number of Guest: {data.guests}
                    </p><br />
                    <Link to={{ pathname: `/dashboard/${username}` }}>
                        <button type="button" className="btn btn-secondary">Return</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default ThankYou

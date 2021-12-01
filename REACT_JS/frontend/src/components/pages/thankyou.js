import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import http from "../../http-common.js"

const ThankYou = () => {

    const location = useLocation()
    const data = location.state

    console.log(data)
    //console.log(data)

    return (
        <div>
            <Row className="text-center">
                <Col>
                    <h1 className="thankyou-header">Thank You!</h1>
                    <p className="thankyou-subtext">
                        Don't forget to remember the time and date.
                        <br/>
                        You may also print this page for reference:
                        <br/>
                        Date: {data.date}
                        <br/>
                        Number of Guest: {data.guestNum}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default ThankYou

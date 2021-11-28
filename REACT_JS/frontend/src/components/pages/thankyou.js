import React from 'react'
import { Row, Col } from 'reactstrap'

const ThankYou = () => {
    return (
        <div>
            <Row className="text-center">
                <Col>
                    <p className="thankyou-header">Thank You!</p>
                    <p className="thankyou-subtext">
                        Don't forget to remember the time and date.
                        You may also print this page for reference:
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default ThankYou

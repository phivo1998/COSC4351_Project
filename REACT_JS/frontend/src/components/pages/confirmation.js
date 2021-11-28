import React from 'react'
import { Row, Col } from 'reactstrap'

const Confirmation = () => {
    return (
        <div>
            <Row className="text-center">
                <Col>
                    <p className="confirmation-header">Confirm Your Reservation</p>
                    <p className="confirmation-subtext">
                        Please review the following reservation you have requested:
                    </p>
                    <button type="button" style={{marginRight: '5px'}} className="btn btn-primary">Confirm</button>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Col>
            </Row>
        </div>
    )
}

export default Confirmation

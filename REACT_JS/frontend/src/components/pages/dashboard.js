import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

    const params = useParams();

    return (
        <>
            <h1> Welcome {params.username}!!!</h1>
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Booking</button>
                <button type="button" className="btn btn-secondary">Edit Profile</button>
                <button type="button" className="btn btn-secondary">Logout</button>
            </div>
        </>
    )
}

export default Dashboard

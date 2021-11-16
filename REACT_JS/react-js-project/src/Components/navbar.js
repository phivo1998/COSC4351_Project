import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return (
            <nav>
                <Link to='\Admin'> Admin Page</Link>
                <div>
                    <ul>
                        <li>
                            <Link to='\'>Reservation page</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
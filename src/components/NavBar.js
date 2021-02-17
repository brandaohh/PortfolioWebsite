import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navStyle = {
        color: '#fff !important',
        textDecoration: 'none'
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <Link style={navStyle} to='/'>
                brandaohh
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul style={navStyle} className="navbar-nav mr-auto">
                    <Link style={navStyle} to='/photography'>
                        <li className="nav-item">
                            Photography
                        </li>
                    </Link>
                </ul>
            </div>

            <Link to='/contact'>
                <button className="btn btn-outline-primary" type="submit">Contact me</button>
            </Link>
        </nav>
    )
}

export default NavBar

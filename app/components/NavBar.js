import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/students">STUDENTS</Link>
                        </li>
                        <li>
                            <Link to="/campuses">CAMPUSES</Link>
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/new-student">NEW STUDENT</Link>
                        </li>
                        <li>
                            <Link to="/new-campus">NEW CAMPUS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
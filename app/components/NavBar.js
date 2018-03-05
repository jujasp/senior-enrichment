import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to='/students' onClick={e => e.preventDefault()}>STUDENTS</Link>
                        </li>
                        <li> 
                            <Link to='/campuses' onClick={e => e.preventDefault()}>CAMPUSES</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={e => e.preventDefault()}>HOME</Link>
                        </li>
                        <li>
                            <Link to='/new-student' onClick={e => e.preventDefault()}>NEW STUDENT</Link>
                        </li>
                        <li>
                            <Link to='/new-campus' onClick={e => e.preventDefault()}>NEW CAMPUS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
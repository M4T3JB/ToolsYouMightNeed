import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/home">Home</Link></li>
               
                
            </ul>
        </nav>
    );
};

export default Navigation;
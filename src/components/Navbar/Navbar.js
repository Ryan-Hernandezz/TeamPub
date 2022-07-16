import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <ul className='navbar'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to="/games">Games</Link>
            </li>
            <li>
                <Link to="/players">Players</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;

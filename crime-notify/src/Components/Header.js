import '../App.css';
import React from 'react';
import profilePic from '../Assets/profilePic.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-accountpage">
                    <img src={profilePic} />
                </Link>
            </div>
        </nav>
    </>
  );
}

export default Header;

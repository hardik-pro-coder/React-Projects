import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = ({username}) => {

    return (
        <>
            <nav>
                <div className='nav-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav-list'>
                    <ul>
                        <li>Who Is This For</li>
                        <li>Plans</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        {
                            username && <li>{`Hello, ${username}`}</li>
                        }
                    </ul>
                </div>
                <div className='nav-btn'>
                    <button>Schedule a Demo</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
import React from 'react';
import './NavBar.css'
import logo from '../../assets/logonav214.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
<span className="nav-left-styling">
    <img src={logo} alt="logo" className="logo-styling"/>
</span>
            <span className="nav-center-styling">
            <NavLink to="/" exact={true} activeClassName="active-link">
                Home
            </NavLink>
            <NavLink to="/about-us" activeClassName="active-link">
                About Us
            </NavLink>
            <NavLink to="/our-app" activeClassName="active-link">
                Our App
            </NavLink>
            <NavLink to="/contacts" activeClassName="active-link">
                Contacts
            </NavLink>
</span>
            <span className="nav-right-styling">
                <NavLink to="/log-in" activeClassName="active-link">
                Log in
            </NavLink>
                 <NavLink to="/sign-up">
                <button>Sign Up</button>
            </NavLink>
</span>
        </nav>
    );
};

export default NavBar;
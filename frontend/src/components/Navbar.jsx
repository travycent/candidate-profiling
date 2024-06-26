import React from "react";
import reactLogo from '../assets/react.svg'
export default function Navbar(){
    return(
        <div className="header">
            <img src={reactLogo}alt="logo" className="header--logo"/>

            <ul className="header--list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}
import React from "react";
import { useState } from "react";
import reactLogo from '../assets/react.svg'
import ProfileModal from "../modals/ProfileModal";
export default function Navbar(){
    {/*profile modal states */}
    const [showProfileModal, setShowProfileModal] = useState(false);

    const handleCloseProfileModal = () => setShowProfileModal(false);
    const handleShowProfileModal = () => setShowProfileModal(true);
    return(
        <div className="header">
            

            <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
            <div className="container-fluid">
                
                <img src={reactLogo}alt="logo" className="header--logo me-4"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    
                </ul>
                {/* <span className="navbar-text btn" >
                    <button className="btn" onClick={()=>setShowProfileModal(true)}>Profile</button>
                </span> */}
                </div>
            </div>
            </nav>
            {/*PROFILE MODAL */}
            <ProfileModal 
                show = {showProfileModal}
                handleClose={handleCloseProfileModal}
            />
        </div>
    );
}
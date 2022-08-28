import React from 'react';
import {NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">NewsMonkey</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li><NavLink className='nav-link' exact to="/">Home</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/business">Business</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/entertainment">Entertainment</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/health">Health</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/science">Science</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/sports">Sports</NavLink></li>
                 <li><NavLink className='nav-link' exact to="/technology">Technology</NavLink></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    );
}

export default Navbar;

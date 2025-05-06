import React from 'react'
import '../index.css' ;
import { IoMdArrowDropdown } from "react-icons/io";
export default function Navbar() {
  return (
    <div >

   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">     
  <div className="container-fluid ">
  <div className='navbar'>
    
  <div className='logo'>
    <button className='nav-link active'> <img src='https://www.gangarealty.com/swarnim/images/logo.svg' className="hero-bg" href="#" /></button>
  
  </div>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/overview">OVERVIEW</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR PROJECTS<IoMdArrowDropdown />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">SWARNIM</a></li>
            <li><a className="dropdown-item" href="#">SWARNIM 35</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/location">LOCATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/amenities">AMENITIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/floor">FLOOR PLANS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/enquire">DOWNLOAD BROCHURE</a>
        </li>
        <li className="nav-item enquire">
          <a className="nav-link active" aria-current="page" href="/enquire">ENQUIRE NOW</a>
        </li>
      </ul>
      
    </div>

  </div>
    
  </div>
</nav>
    </div>
  )
}

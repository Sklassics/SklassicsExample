import React from 'react'
import '../pages/navbar.css'
import background from "../assets/background.png";
const Navbar = () => {
  return (
   <>
   <div className="navbar-container">
    <div className="navbar-inner">
      {/* Left Section */}
      <div className="nav-section left">
        <div className="nav-item">INDEX <br /> 4 ELVIS</div>
        <div className="nav-separator">+</div>
        <div className="nav-item">Art<br />Tour</div>
        <div className="nav-separator">+</div>
        <div className="nav-item">10:00<span className='am'>AM</span> <span className='pm'>06:00</span><span className='pm'>PM</span></div>
      </div>

      {/* center-section center */}
      <div className="nav-section center">
        <div className="nav-item contact">sklassicsedutech@gmail.com<br />[+91] 9392732341</div>
       <div className="nav-log">
        <img src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png" alt='Sklassics' className='company-logo'/>
        </div>
         <div className="nav-item tagline">Step into the SKLASSICS state of mind.<br />Limited tickets are on sale.</div>
      </div>

     {/* Right Section */}
     <div className="nav-section right">
      <div className="nav-item">IG</div>
      <div className="nav-separator">+</div>
      <div className="nav-item">QUOTE<br />N.PRAVEEN</div>
      <div className="nav-item">Expo <br />TICKETS</div>
     </div>
     <img src = {background.png}/>
    </div>
   </div>
   </>
  )
}

export default Navbar

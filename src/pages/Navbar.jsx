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
        <div className="nav-item">11:00<span className='am'>AM</span> <span className='pm'>06:00</span><span className='pm'>PM</span></div>
      </div>

      {/* center-section center */}
      <div className="nav-section center">
        <div className="nav-item contact">Praveinpatel06@gmail.com<br />[+91] 7997132290</div>
       <div className="nav-log">
        <img src="	https://cdn.prod.website-files.com/6718c8afa78e156621f3a2ed/67195098c93410168b7a9196_Logo.svg" alt='Warhol Logo'/>
        </div>
         <div className="nav-item tagline">Step into Warhol's iconic universe.<br />Limited tickets are on sale.</div>
      </div>

     {/* Right Section */}
     <div className="nav-section right">
      <div className="nav-item">IG</div>
      <div className="nav-separator">+</div>
      <div className="nav-item">QUOTE<br />M.MONROE</div>
      <div className="nav-item">Expo <br />TICKETS</div>
     </div>
     <img src = {background.png}/>
    </div>
   </div>
   </>
  )
}

export default Navbar

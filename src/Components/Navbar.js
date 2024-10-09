import React from 'react'

function Navbar() {
  return (
    <div>
      <div class="navbar">
        {/* border radius : top-left , top-right, bottom-right, bottom-left */}
        <a href="#home" style={{borderRadius:"10px 50px 50px 90px"}}>Home</a> 
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href='#achieve'>Achievements</a>
        <a href="#contact" style={{borderRadius:"50px 90px 10px 50px"}}>Contacts</a>
      </div>
      {/* <div class="navbar1">
        <div className='right_nav'> 
          <a href="#home">Home</a>
          <a href='#achieve'>Achievements</a>
          <a href="#skills">Skills</a>
        </div>
        <div className='left_nav'>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contacts</a>
        </div>
      </div> */}
      
    </div>
  )
}

export default Navbar

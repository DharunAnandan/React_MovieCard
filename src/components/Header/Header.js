import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  let about_style={textDecoration:"none", color:"inherit"}
  return (
    <div className='header'> 
      <h1><Link to='/main' style={about_style}>REACT</Link></h1>

      <div className='nav'>
        <h3><Link to="/about" style={about_style} >ABOUT</Link></h3>
        <h3><a href='#footer'>CONTACT</a></h3>
        <h3><Link to="/" style={about_style} >LOGOUT</Link></h3>  
      </div>

    </div>
  )
}
export default Header
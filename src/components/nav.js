import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
  const link = {
    color: 'black',
    fontSize: '16px',
    TextDecoder :'none', 
  };
  return (
    <div>
        <nav>
            <ul>
                <li><Link style={link} to={`/`}>Home</Link> </li>
                <li>Movies</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
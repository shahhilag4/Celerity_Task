import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h3 className='black'>Ship</h3><h3 className='blue'>mate.</h3>
        </div>
        <Link to='/booking'>
        
        <button type="button" id='login' className="btn-login"
              >$</button>
              </Link>
        <button type="button" id='learn' className="btn-learn">Track Shipment</button>  
    </div>
  )
}

export default Header
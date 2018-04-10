import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className='nav'>
      <div className="logo">
        <img src="https://github.com/DevMountain/simulation-1/blob/master/assets/shelfie_icon.png?raw=true" alt="logo" />
      </div>

      <div className="shelfie">SHELFIE</div>
      <div className='link-wrap'>

        <Link to="/" className='links'>Dashboard</Link>
        <Link to="/product" className='links'>Add Inventory</Link>
      </div>
    </nav>
  )
}

export default Header;
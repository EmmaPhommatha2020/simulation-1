import React from 'react';
import { Link } from 'react-router-dom'


function Header(){
  return (
    <nav className='nav'>
    <div className="shelfie">Shelfie</div>
    <div className='link-wrap'>

      {<Link to="/" className='links'>Dashboard</Link>}
      {<Link to="/product" className='links'>Product</Link>}

    </div>
  </nav>
  )
}

export default Header;
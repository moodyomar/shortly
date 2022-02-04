import React from 'react';
import "./navbar.css"
import logo from '../../images/logo.svg'

const Navbar = () => { 

return(

<nav className='Navbar'>
  
<div className="logo"><img src={logo} alt="logo"/></div>

<ul className="navlinks">
  <li><a href="#features">Features</a></li>
  <li><a href="#pricing">Pricing</a></li>
  <li><a href="#resources">Resources</a></li>
</ul>

<div className="login-signup">
  <button className='btn btn-login'>Login</button>
  <button className='btn btn-primary round'>Sign Up</button>
</div>

</nav>

)
}

export default Navbar
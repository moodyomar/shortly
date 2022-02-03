import React from 'react';
import "../style/Navbar.css"

const Navbar = () => { 

return(

<nav className='Navbar'>
  
<h1 className="logo">Shortly</h1>

<ul className="navlinks">
    <li>Features</li>
    <li>Pricing</li>
    <li>Resources</li>
</ul>

<div className="login-signup">
  <button className='btn login'>Login</button>
  <button className='btn primary round'>Sign Up</button>
</div>

</nav>

)
}

export default Navbar
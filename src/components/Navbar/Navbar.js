import React, { useState } from 'react';
import {Buttons,Links} from './NavItems';

import "./navbar.css"
import logo from '../../images/logo.svg'
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'

const Navbar = () => { 

let [toggleMenu,setToggleMenu] = useState(false);

return(

<nav className='Navbar'>
  
<div className="logo"><img src={logo} alt="logo"/></div>

  <ul className="navlinks">
<Links/>
</ul>

<div className="login-signup">
<Buttons/>
</div>

<div className="mobile-nav">
{!toggleMenu
? <RiMenuLine size={30} onClick={() => setToggleMenu(true)} />
: <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
}
{toggleMenu && (
<div className="mobile-links fade-in-top">
<Links/>
<Buttons/>
</div>
)}
</div>

</nav>

)
}
 
export default Navbar
import React, { useState } from 'react';
import {Buttons,Links} from './NavItems';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'
import "./navbar.css"

const Navbar = () => { 

let [toggleMenu,setToggleMenu] = useState(false);

return(

<nav className='Navbar'>
  
<div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>

  <div className="navlinks">
<Links/>
</div>

<div className="login-signup">
<Buttons/>
</div>

<div className="mobile-nav">
{!toggleMenu
? <RiMenuLine size={30} onClick={() => setToggleMenu(true)} />
: <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
}

<div className={`mobile-links ${toggleMenu ? 'fade-in-top' : 'fade-in-bottom'}`}>
<Links/>
<Buttons/>
</div>

</div>

</nav>

)
}
 
export default Navbar
import React from 'react';
import ig from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import fb from '../../images/icon-facebook.svg';
import pinterest from '../../images/icon-pinterest.svg';

import './footer.css'

const Footer = () => { 

return(

<div className='Footer'>
<div className="container">
  <div className="footer-logo">
    <h1>Shortly</h1>
  </div>
  <div className="col col-1">
    <ul>
      <strong><li>Features</li></strong>
      <li>Links Shortening</li>
      <li>Branded Links</li>
      <li>Analytics</li>
    </ul>
  </div>
  <div className="col col-2">
    <ul>
      <strong><li>Resources</li></strong>
      <li>Blog</li>
      <li>Developers</li>
      <li>Support</li>
    </ul>
  </div>
  <div className="col col-3">
    <ul>
      <strong><li>company</li></strong>
      <li>About</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
  </div>
  <div className="col col4">
    <img src={ig} alt="ig" />
    <img src={twitter} alt="twitter" />
    <img src={fb} alt="fb" />
    <img src={pinterest} alt="pinterest" />
  </div>
</div>
</div>

)
}

export default Footer
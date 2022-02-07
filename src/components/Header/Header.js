import React from 'react';
import header_image from '../../images/illustration-working.svg'
import "./header.css"

const Header = () => { 

return(

<div className='Header'>
<div className="left-col">
<div className="content">
<h1>More than just<br/>shorter links</h1>
<p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
  <button className='btn btn-primary round-max' onClick={() => window.scrollTo(0,400)}>Get Started</button>
</div>
</div>
<div className="right-col">
<img src={header_image} alt="working man" />
</div>
</div>

)
}

export default Header
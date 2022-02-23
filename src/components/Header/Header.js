import React from 'react';
import "./header.css"

const Header = ({image,heading,para}) => { 

return(

<div className='Header'>
<div className="left-col">
<div className="content">
<h1>{heading}</h1>
<p>{para}</p>
  <button className='btn btn-primary round-max' onClick={() => window.scrollTo(0,550)}>Get Started</button>
</div>
</div>
<div className="right-col">
<img src={image} alt={image} />
</div>
</div>

)
}

export default Header
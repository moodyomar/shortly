import React from 'react';
import './card.css'

const Card = ({icon,alt,title,desc,mt}) => { 

return(

<div className='Card scale-eff' data-aos="fade-right" data-aos-duration="1000">
<div className="icon">
      <img src={icon} alt={alt} />
    </div>
    <h2>{title}</h2>
    <p>{desc}</p>
</div>

)
}

export default Card
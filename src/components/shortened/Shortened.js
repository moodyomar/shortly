import React, { useState } from 'react';
import './shortened.css'

const Shortened = ({originalLink,resultLink}) => { 

const [copy,setCopy] = useState(false);

const copyLink = (resultLink) => {
  navigator.clipboard.writeText(resultLink)
  setCopy(true);
}

return(

<div className="shortned-container">
<div className='Shortened'>
<a href={originalLink} className="originalLink">{originalLink}</a>
<div className="resultLink-container">
<a href={resultLink} target="_blank" className="resultLink">{resultLink}</a>
{
  copy 
  ? <button className="btn btn-dark round-med copyBtn"
  onClick={() => copyLink(resultLink)}>Copied !</button>
  : <button className="btn btn-primary round-med copyBtn"
  onClick={() => copyLink(resultLink)}>Copy</button>
}
</div>
</div>
</div>

)
}

export default Shortened
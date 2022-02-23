import React, { useState } from 'react';
import './shortened.css'

const Shortened = ({originalLink,resultLink,mt}) => { 

const [copy,setCopy] = useState(false);

const copyLink = (resultLink) => {
  navigator.clipboard.writeText(resultLink)
  setCopy(true);
  setTimeout(() => {
    setCopy(false);
  }, 2000);
}

return(

<div className="shortned-container">
<div className='Shortened' style={{marginTop:mt}}>
<a href={originalLink} className="originalLink">{originalLink}</a>
<hr style={{width:"100%"}} />
<div className="resultLink-container">
<a href={resultLink} target="_blank" rel="noreferrer" className="resultLink">{resultLink}</a>
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
import React from 'react';
import './shortened.css'

const Shortened = ({originalLink,resultLink}) => { 

const copyLink = () => {

}

return(

<div className="shortned-container">
<div className='Shortened'>
<a href={originalLink} className="originalLink">{originalLink}</a>
<div className="resultLink-container">
<a href={resultLink} className="resultLink">{resultLink}</a>
<button className="btn btn-primary round-med copyBtn"
onClick={() => copyLink()}>Copy</button>
</div>
</div>
</div>

)
}

export default Shortened
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shortened from '../shortened/Shortened';
import './shortner.css'

const Shortner = () => { 

  let [url,setUrl] = useState("");
  let [isDisabled,setIsDisabled] = useState(true);
  let [data,setData] = useState('')

    useEffect(() => {
      url.length > 9 ? setIsDisabled(false) : setIsDisabled(true);
  },[url,data])

  const linkShortner = () => {
  let validUrl = /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/
  if(url.match(validUrl)){
    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(res => setData(res.data.result))
    .catch(err => console.log(err))
  }else{
    alert('url is not valid!');
  }

  }

return(
<>
<div className='Shortner'>
<div className="container">
<input type="text" placeholder='Shorten a link here...' onChange={e => setUrl(e.target.value)} />
<button disabled={isDisabled} className='btn btn-primary round-med' onClick={linkShortner}>Shorten it!</button>
</div>
</div>
{ data &&
<Shortened originalLink={data.original_link}
resultLink={data.full_short_link} />
}
</>
)
}

export default Shortner
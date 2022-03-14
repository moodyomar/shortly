import React, { useState } from 'react';
import Shortened from '../shortened/Shortened';
import './Whatsapp.css'


const Whatsapp = () => { 

let [phoneNum,setPhoneNum] = useState('');
let [msg,setMsg] = useState('');
let [msgLink,setMsgLink] = useState('')
let [showLink,setShowLink] = useState(false)

const createQuickMsg = async () => {
  if(phoneNum !== '' && msg !== ''){
    setMsgLink(`https://api.whatsapp.com/send?phone=${phoneNum}&text=${msg}`)
    setShowLink(true);
    }
  else alert('Fill in the details please')
}

return(
<>
<div className='Whatsapp'>
  <div className="container">
<label htmlFor="msg">The phone number you want to create the link for.</label>
<input type="text" placeholder='+972 123456789'
 onChange={e => setPhoneNum(e.target.value)}  />
<label htmlFor="msg">The message do you want to send through the link.</label>
<input type="phone" placeholder='Message for whatsapp'
 onChange={e => setMsg(e.target.value)}  />
<button className='btn btn-primary round-med'
 onClick={() => createQuickMsg()}>
  Generate Link
</button>
</div>
</div>
{ showLink &&
<Shortened mt={'50px'} originalLink={msgLink} resultLink={msgLink} />
}
</>
)
}

export default Whatsapp
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Shortened from '../shortened/Shortened';
import './shortner.css'

const Shortner = () => {

  let [url, setUrl] = useState("");
  let [isDisabled, setIsDisabled] = useState(true);
  let [data, setData] = useState('');
  let [linksHistory, setLinksHistory] = useState([]);

  useEffect(() => {
    if (localStorage['linksHistory']) {
      let storedLinks = JSON.parse(localStorage.getItem('linksHistory'));
      setLinksHistory(storedLinks);
    }
  }, [])

  useEffect(() => {
    url.length > 9 ? setIsDisabled(false) : setIsDisabled(true);
  }, [url])

  useEffect(() => {
    if (data) {
      let { original_link, full_short_link } = data;
      let shortenedLink = {
        original_link,
        full_short_link
      };
      setLinksHistory([shortenedLink, ...linksHistory]);
    }
  }, [data])

  useEffect(() => {
    let recentLinks = JSON.stringify(linksHistory);
    localStorage.setItem('linksHistory', recentLinks);
  }, [linksHistory])

  const linkShortner = () => {
    let validUrl = /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/
    if (url.match(validUrl)) {
      axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(res => setData(res.data.result))
        .catch(err => console.log(err))
    } else alert('url is not valid!');
  }

  return (
    <>
      <div className='Shortner'>
        <div className="container">
          <input type="text" placeholder='Shorten a link here...' onChange={e => setUrl(e.target.value)} />
          <button disabled={isDisabled} className='btn btn-primary round-med' onClick={linkShortner}>Shorten it!</button>
        </div>
      </div>
      {linksHistory.length > 0 &&
        linksHistory.map((link, idx) => (
          <Shortened key={idx} originalLink={link.original_link}
            resultLink={link.full_short_link} />
        )).slice(0, 3)
      }
    </>
  )
}

export default Shortner
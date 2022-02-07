import React from 'react';


export const Links = () => {

  return (
    <ul>
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#resources">Resources</a></li>
    </ul>
  )
}

export const Buttons = () => {

  return (
    <>
    <hr />
      <button className='btn'>Login</button>
      <button className='btn btn-primary round-max'>Sign Up</button>
    </>
  )
}
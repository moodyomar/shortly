import { Link } from "react-router-dom";

export const Links = () => {

  return (
    <ul>
      <li><Link to="/features">Features</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="#resources">Resources</Link></li>
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
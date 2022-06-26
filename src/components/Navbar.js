import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" href="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link  className="nav-link" to="/">{props.home} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Gallery">{props.gallery}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">{props.contact}</Link>
      </li>

    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div class={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
  <input class="form-check-input"  onChange={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"enable light  mode":"enable dark mode"}</label>
</div>
   
  </div>
</nav> 
   
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string,
    about: PropTypes.string,
    gallery: PropTypes.string,
    contact: PropTypes.string,

}

// Specifies the default values html props:
Navbar.defaultProps = {
    title: 'Navbar',
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact',
  };
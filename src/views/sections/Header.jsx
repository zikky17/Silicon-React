import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../images/logo/silicon-logo-light_theme.svg'
import { toggleMenu } from '../../js/script'




const Header = ({headerShadow, fillerBackground}) => {

  return (
    <header className={headerShadow ? 'header-shadow' : (fillerBackground ? 'header-fillerbackground' : '')}>

      <div className="container">
        <Link id="logo" to="/">
          <img src={Logo} alt="silicon logotype" />
        </Link>

        <nav id="menu">
          <div className="menu-links">
            <NavLink className="nav-link" to="/#overview">Overview</NavLink>
            <NavLink className="nav-link" to="/features">Features</NavLink>
            <NavLink className="nav-link" to="/news">News</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </div>
        </nav>

        <div id="theme-mode">
          <div className="theme-switch-wrapper">
            <label htmlFor="theme-toggle-switch">Light</label>
            <label className="theme-switch" htmlFor="theme-toggle-switch">
              <input type="checkbox" id="theme-toggle-switch" />
              <div className="slider round"></div>
            </label>
            <label htmlFor="theme-toggle-switch">Dark</label>
          </div>
        </div>

        <a id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular fa-user"></i> Sign in / up</a>
        
        <button id="btn-menu" onClick={toggleMenu}><i className="fa-regular fa-bars"></i></button>
      </div>
    </header>
  )
}

export default Header
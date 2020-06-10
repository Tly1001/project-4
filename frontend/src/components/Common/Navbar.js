import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const { pathname } = useLocation()

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  React.useEffect(() => {
    setNavbarOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="navbar is-fixed-top">
        <div className="nav-wrap">
          <span className={`burger ${navbarOpen ? 'is-active' : ''}`} onClick={toggleNavbar}>
            <span className={`${ navbarOpen ? 'burger-first-active' : '' }`}></span>
            <span className={`${ navbarOpen ? 'burger-mid-active' : '' }`}></span>
            <span className={`${ navbarOpen ? 'burger-last-active' : '' }`}></span>
          </span>
          <Link className="logo" to="/"><h1>V & N Beauty and Nails</h1></Link>
          <Link className="nav-button" to="/login"><p>Log in</p></Link>
        </div>
      </nav>
      <ul className={`menu ${ navbarOpen ? 'menu-active' : '' }`}>
        <Link className="" to="/"><li>Home</li></Link>
        <li>Bookings</li>
        <li>Treatment Menu</li>
        <Link className="" to="/location"><li>Location</li></Link>
        <Link className="" to="/login"><li>Log in</li></Link>
        <Link className="" to="/register"><li>Register</li></Link>
        <li>Log out</li>
      </ul>
    </>
  )
}

export default Navbar
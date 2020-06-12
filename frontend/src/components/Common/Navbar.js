import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const { pathname } = useLocation()

  const history = useHistory()

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleLogout = () => {
    logout()
    history.push('/login')
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
          {!isAuthenticated() && <Link className="nav-button" to="/login"><p>Log in</p></Link>}
          {isAuthenticated() && <p onClick={handleLogout} className="nav-button">Log out</p>}
        </div>
      </nav>
      <ul className={`menu ${ navbarOpen ? 'menu-active' : '' }`}>
        <Link className="" to="/"><li>Home</li></Link>
        {isAuthenticated() ? <Link className="" to="/bookings"><li>Bookings</li></Link> :
          <Link className="" to="/login"><li>Bookings</li></Link>}
        <Link className="" to="/menu"><li>Treatment Menu</li></Link>
        <Link className="" to="/location"><li>Location</li></Link>
        {!isAuthenticated() && <Link className="" to="/login"><li>Log in</li></Link>}
        {!isAuthenticated() && <Link className="" to="/register"><li>Register</li></Link>}
        {isAuthenticated() && <li onClick={handleLogout}>Log out</li>}
      </ul>
    </>
  )
}

export default Navbar
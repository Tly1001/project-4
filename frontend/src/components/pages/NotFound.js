import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <section className="home-wrap">
        <div className="text-section">
          <h3>Oops something went wrong</h3>
          <p>Click the button to be redirected home</p>
          <div className="links-wrap">
            <Link className="" to="/"><p>Home</p></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
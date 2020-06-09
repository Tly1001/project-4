import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="home-wrap">
        <figure className="image image image-section">
          <img src="https://i.imgur.com/C2gzuen.jpg" alt="nails" loading="lazy"/>
        </figure>
        <div className="text-section">
          <h3>Good Nails for Good Moments</h3>
          <p>A tucked away little gem just off Wandsworth road. We offer a wide range of nail and beauty treatments, giving customer care with finesse, passion, and a touch of sass.</p>
          <div className="links-wrap">
            <p>Book now</p>
            <Link className="" to="/location"><p>Find us</p></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
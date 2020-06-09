import React from 'react'

function Location() {
  return (
    <>
      <section className="location-wrap">
        <div className="text-section">
          <h3>10 WILCOX ROAD</h3>
          <h3>LONDON, SW8 2UX</h3>
          <div className="info">
            <p className="bold spaced">OPENING TIMES</p>
            <div className="spaced gap">
              <p className="bold">MONDAY - SATURDAY</p>
              <p>10am - 7pm</p>
            </div>
            <div className="spaced gap">
              <p className="bold">SUNDAY</p>
              <p> 11am - 5pm</p>
            </div>        
            <p className="bold">Booking is just a tap away</p>
            <p>You can now make, change, and cancel your bookings through our website. Alternatively if you would like to contact us, feel free to call us on <span className="bold">020 7498 2370</span></p>
          </div>
          <p className="link-btn">Book now</p>
        </div>
        <figure className="image image-section">
          <img src="https://i.imgur.com/C2gzuen.jpg" alt="nails" loading="lazy"/>
        </figure>
      </section>
    </>
  )
}

export default Location
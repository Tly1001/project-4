import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

const images = [
  'https://cdn.spafinder.com/2019/03/facial8.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/47/8f/34/atipat-thai-massage.jpg',
  'https://i.pinimg.com/474x/b7/f4/d9/b7f4d981cc6a4c92793d0aece4f6c4f5.jpg',
  'https://i.imgur.com/C2gzuen.jpg'
]

function Home() {
  const [imageNum, setImageNum] = React.useState(0)
  const [image, setImage] = React.useState('https://i.imgur.com/C2gzuen.jpg')
  
  React.useEffect(() => {

    const interval = setTimeout(() => {
      imageNum < 3 ? setImageNum(imageNum => imageNum + 1) : setImageNum(0)
      setImage(images[imageNum])
    }, 5000)
    return () => clearTimeout(interval)
  }, [imageNum])
  

  return (
    <>
      <section className="home-wrap">
        <figure className="image image image-section">
          <img src={image} alt="nails" loading="lazy"/>
        </figure>
        <div className="text-section">
          <h3>Good Nails for Good Moments</h3>
          <p>A tucked away little gem just off Wandsworth road. We offer a wide range of nail and beauty treatments, giving customer care with finesse, passion, and a touch of sass.</p>
          <div className="links-wrap">
            {isAuthenticated() ? <Link className="" to="/bookings"><p className="link-btn">Book now</p></Link> :
              <Link className="" to="/login"><p className="link-btn">Book now</p></Link>}
            <Link className="" to="/location"><p className="link-btn">Find us</p></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
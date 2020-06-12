import React from 'react'
import moment from 'moment'
// import mobiscroll from '@mobiscroll/react'
// import '@mobiscroll/react/dist/css/mobiscroll.min.css'
// import DateTimePicker from 'react-datetime-picker'

import Spinner from '../Common/Spinner'
import TimePicker from '../Common/TimePicker'
// import TimePicker2 from '../Common/TimePicker2'

import { getServices, postNewBooking } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import { getMyBookings } from '../../lib/api'

const initialState = {
  data: null,
  error: null,
  loading: true
}

function Bookings() {
  const [myBookings, setMyBookings] = React.useState(initialState)
  const [services, setServices] = React.useState(initialState)
  const [newBooking, setNewBooking] = React.useState(null)
  const [serviceChoice, setServiceChoice] = React.useState({
    type: '',
    sub: '',
    service: ''
  })
  const history = useHistory()

  const getData = async () => {
    try {
      const res = await getMyBookings()
      const services = await getServices()
      setServices({ data: services.data })
      setMyBookings({ data: res.data, loading: false, error: null })
      console.log(res.data)
    } catch (err) {
      setMyBookings({ data: {}, loading: true, error: true })
    }
  }
  
  React.useEffect(() => {
    getData()
  }, [history])

  const handleDateData = data => {
    // * date
    const date = moment(data).format('YYYY-MM-DD')

    // * start time
    const start_time = moment(data).format('H:mm:ss')

    // * minutes add
    const end_time = moment(start_time, 'H:mm:ss').add(30, 'm').format('H:mm:ss')
    
    setNewBooking({
      date: date,
      start_time: start_time,
      end_time: end_time
    })
  }


  const handleType = (event, category) => {
    console.log(event)
    setServiceChoice({ ...serviceChoice, [category]: event })
    // if(category === 'service') setNewBooking(...newBooking, {service: event})
  }

  const handleSubmit = () => {
    const req = ({ 
      service: serviceChoice.service,
      date: newBooking.date,
      start_time: newBooking.start_time,
      end_time: newBooking.end_time
    })
    console.log(req)
    postNewBooking(req)
    getData()
  }




  
  return (
    <>
      <section className="bookings-wrap">
        <div className="new-booking">
            New Booking
          <div>
            <TimePicker
              // value={dateTime}
              onSet={handleDateData}
            />
            <div className="services-wrap">
              { services.loading ?
                <Spinner />
                :
              // * Service choices
              
                services.data.map( type => {
                  const services = []
                  services.push(
                    <div key={`booking${type.name}`} 
                      className={`btn type 
                      ${serviceChoice.type ? serviceChoice.type  !== type.name ? 'type-hide' : '' : ''}`} 
                      onClick={() => handleType(type.name, 'type')} 
                      value={type.name}>{type.name}
                    </div>
                  )
                  type.sub_services.map( sub => {
                    services.push(
                      <div key={`booking${sub.name}`} 
                        className={`btn sub ${serviceChoice.type === type.name ? type.name : ''}`}
                        onClick={() => handleType(sub.name, 'sub')}>
                        {sub.name}</div>)
                    sub.services.map(service => {
                      services.push(
                        <p 
                          key={service.name} 
                          className={`btn service ${serviceChoice.type  === type.name && serviceChoice.sub === sub.name ? 'show' : '' }`}
                          onClick={() => handleType(service.id, 'service')}
                        >
                          {service.name}
                        </p>
                      )
                    })
                  })
                  return services
                })
              
              }
            </div>
            <p 
              className="submit"
              onClick={handleSubmit}
            >
              Submit
            </p>
          </div>
          
        </div>
        <div className="user-bookings" onClick={() => console.log(newBooking)}>
          { myBookings.loading ?
            <Spinner />
            :
          // * user bookings
            myBookings.data.map(booking => {
              const bookings = []
              bookings.push(
                <div key={`booking${booking.id}`} className="">
                  {booking.date} 
                  <p>{booking.service.name} {booking.start_time} - {booking.end_time}</p>
                </div>
              )
              
              return bookings
            })
          }
          
        </div>
      </section>
    </>
  )
}

export default Bookings
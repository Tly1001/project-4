import React from 'react'
import moment from 'moment'
// import mobiscroll from '@mobiscroll/react'
// import '@mobiscroll/react/dist/css/mobiscroll.min.css'
// import DateTimePicker from 'react-datetime-picker'

import Spinner from '../Common/Spinner'
import TimePicker from '../Common/TimePicker'
// import TimePicker2 from '../Common/TimePicker2'

import { getServices } from '../../lib/api'
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
  const history = useHistory()

  
  React.useEffect(() => {
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
    getData()
  }, [history])

  const handleDateData = data => {
    // * date
    const date = moment(data).format('YYYY-MM-DD')

    // * start time
    const start_time = moment(data).format('H:mm:ss')

    // * minutes add
    const end_time = moment(start_time, 'H:mm:ss').add(10, 'm').format('H:mm:ss')
    // console.log(data)
    // console.log(date)
    // console.log(time)
    setNewBooking({
      date,
      start_time,
      end_time
    })



    
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
                  services.push(<div key={`booking${type.name}`} className="type">{type.name}</div>)
                  type.sub_services.map( sub => {
                    services.push(<div key={`booking${sub.name}`}>{sub.name}</div>)
                  })
                  return services
                })
              
              }
            </div>
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


// class Bookings extends React.Component {
//   render() {
//     return (
//       <ReactBooking
//         title="Booking"
//         description="Setup your booking"
//         historyType="memory"
//         paymentMethods={{ cash: true, online: false }}
//         appointments={[
//           {
//             id: 1,
//             start: new Date(2019, 6, 10, 10, 30),
//             end: new Date(2019, 6, 10, 10, 45),
//             capacity: 10,
//             price: {
//               amount: 10,
//               curr: '$'
//             }
//           }
//         ]}
//       />
//     )
//   }
// }

export default Bookings
import React from 'react'
import { useHistory } from 'react-router-dom'

import { getServices } from '../../lib/api'
import Spinner from '../Common/Spinner'

const initialState = {
  data: null,
  error: null,
  loading: true
}

function Menu() {
  const [services, setServices] = React.useState(initialState)
  const history = useHistory()
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getServices()
        setServices({ data: res.data, loading: false, error: null })
        // console.log(res.data)
      } catch (err) {
        setServices({ data: {}, loading: true, error: true })
        history.push('/notfound')
      }
    }
    getData()
  }, [history])



  return (
    <section className="menu-wrap">
      <div className="services">
        { services.loading ?
          <Spinner />
          :
          // * types
          services.data.map(type => {
            const menu = []
            menu.push(<p key={type.name} className="type">{type.name}</p>)
            // * sub-types
            type.sub_services.map(subType => {
              menu.push(<p key={subType.name} className="sub-type">{subType.name}</p>)
              // * services
              subType.services.map(service => {
                menu.push(
                  <div className="service-wrap">
                    <p key={service.name} className="service">{service.name}</p>
                    <p key={`${service.name}price`} className="service-info">£{service.price} <span>/</span> {service.duration} mins</p>
                  </div>
                )
              })
            })
            return menu
          })
        }
      </div>
    </section>
  )
}

export default Menu
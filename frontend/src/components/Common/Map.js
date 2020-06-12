import React from 'react'
import MapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


class Map extends React.Component {
  state = {
    data: [],
    viewport: {
      latitude: 51.479575,
      longitude: -0.127694,
      width: '40vw',
      height: '60vh',
      zoom: 16
    }
  }

  moveMap = (viewport) => {
    this.setState({ viewport })
  }

  render() {
    
    return (
      <>
        <MapGl
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle='mapbox://styles/mapbox/light-v10'
          {...this.state.viewport}
          onViewportChange={this.moveMap}
        >
          <Marker
            latitude={51.479630}
            longitude={-0.127695}>
            <span role="img"
              aria-label="marker"
            >📍</span>
          </Marker>
        </MapGl>
      </>
    )
  }
}

export default Map

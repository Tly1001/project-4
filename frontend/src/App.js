import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Home from './components/pages/Home'
import Location from './components/pages/Location'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Bookings from './components/pages/Bookings'
import Menu from './components/pages/Menu'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/location" component={Location} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/notfound" component={NotFound} />
        { /*<Route path="/cheeses" component={CheeseIndex} />
        <Route path="/*" component={ErrorPage} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App

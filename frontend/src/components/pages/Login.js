import React from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { setToken } from '../../lib/auth'

function Login() {
  const [error, setError] = React.useState('')
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  const handleChange = event => {
    try {
      setFormData({ ...formData, [event.target.name]: event.target.value })
      setError('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/login/', formData)
      setToken(res.data.token)
      // history.pushState('/booking')
    } catch (err) {
      console.log(err)
      setError('Invalid Credentials')
    }
  }

  return (
    <section className="section register-wrap">
      <div className="containers">
        <div className="column">
          <form 
            onSubmit={handleSubmit} 
            className="column box">

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${ error ? 'is-danger' : '' }`}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${ error ? 'is-danger' : ''}`}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              {error && <small className="help is-danger">{error}</small>}
            </div>

            <div className="field">
              <button 
                type="submit" 
                className="button is-fullwidth pink"
              >Login</button>
            </div>

            <div className="field">
              <p className="textAlign">Don&apos;t have a login? <Link to="/register" > Register here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
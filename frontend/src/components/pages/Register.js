import React from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import { setToken } from '../../lib/auth'

function Register() {
  const [error, setError] = React.useState([])
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    wantsEmails: false,
    // just cause django is annoying
    username: ''
  })

  const history = useHistory()

  const handleChange = event => {
    try {
      if (event.target.name === 'email') setFormData({ ...formData, username: event.target.value })
      setFormData({ ...formData, [event.target.name]: event.target.value })
      setError('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      console.log(formData)
      
      const res = await axios.post('/api/auth/register/', formData)
      console.log(res)
      
    } catch (err) {
      console.log(err)
      setError('Invalid Credentials')
    }
  }

  return (
    <section className="section register-wrap">
      <div className="containers">
        <div className="columns">
          <form onSubmit={ handleSubmit } className="column is-half is-offset-one-quarter box">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  // className={ `input ${errors.email ? 'is-danger' : ''}` }
                  placeholder="Email"
                  name="email"
                  onChange={ handleChange }
                  value={ formData.email }
                />
              </div>
              {/* { errors.email && <small className="help is-danger">
                {formData.email ? 'An account with this email already exists' : errors.email }
              </small> } */}
            </div>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input 
                  // className={ `input ${errors.username ? 'is-danger' : '' }` }
                  placeholder="First Name"
                  name="firstName"
                  onChange={ handleChange }
                  value={ formData.firstName }
                />
              </div>
              {/* { errors.firstName && <small className="help is-danger">{errors.firstName}</small> } */}
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input 
                  // className={ `input ${errors.password ? 'is-danger' : '' }` }
                  placeholder="Last Name"
                  name="lastName"
                  onChange={ handleChange }
                  value={ formData.lastName }
                />
              </div>
              {/* { errors.lastName && <small className="help is-danger">{errors.lastName}</small> } */}
            </div>

            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input 
                  // className={ `input ${errors.username ? 'is-danger' : '' }` }
                  placeholder="Phone Number"
                  name="mobile"
                  onChange={ handleChange }
                  value={ formData.mobile }
                />
              </div>
              {/* { errors.username && <small className="help is-danger">{errors.username}</small> } */}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  // className={ `input ${errors.password ? 'is-danger' : ''}` }
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={ handleChange }
                  value={ formData.password }
                />
              </div>
              {/* { errors.password && <small className="help is-danger">{errors.password}</small> } */}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input 
                  type="password"
                  // className={ `input ${errors.passwordConfirmation ? 'is-danger' : ''}` }
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  onChange={ handleChange }
                  value={ formData.passwordConfirmation }
                />
              </div>
              {/* { errors.passwordConfirmation && <small className="help is-danger">Your entered passwords do not match</small> } */}
            </div>
            <div className="field">
              <label className="label">Would you like to recieve discounts, updates, and promotions via email?</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="wantsEmails"
                    value="yes"
                    onChange={ handleChange }
                    checked={ formData.wantsEmails === 'yes' }
                  />
                    yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wantsEmails"
                    value="no"
                    onChange={ handleChange }
                    checked={ formData.wantsEmails === 'no' }
                  />
                    no
                </label>
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-rounded is-warning">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
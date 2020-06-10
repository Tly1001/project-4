import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Register() {
  const [error, setError] = React.useState({})
  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: '',
    wants_emails: false,
    // just cause django is annoying
    username: ''
  })

  const history = useHistory()

  const handleChange = event => {
    try {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      // * ternary: I want email and username to be the same value
      event.target.name === 'email' ? setFormData({ ...formData, username: value, [event.target.name]: value }) :
        setFormData({ ...formData, [event.target.name]: value })
      setError('')
    } catch (err) {
      console.log(err)
    }
  }

  const handleErrors = () => {
    const errors = {}
    if (!formData.email) errors.email = 'Please enter a valid email address'
    if (!formData.first_name) errors.first_name = 'Please enter a first name' 
    if (!formData.last_name) errors.last_name = 'Please enter a last name'
    if (!formData.mobile || formData.mobile.length !== 11) errors.mobile = 'Please enter a valid number'
    if (!formData.password) errors.password = 'Please enter a password'
    if (JSON.stringify(errors) === '{}' && formData.password === formData.password_confirmation ) errors.email = 'This email is already in use'
    setError(errors)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      history.pushState('/login')
      // console.log(res)
    } catch (err) {
      console.log(err)
      handleErrors()
    }
  }

  return (
    <section className="section register-wrap">
      <div className="containers">
        <div className="columns">
          <form onSubmit={ handleSubmit } className="column box">

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input 
                  className={ `input ${error.email ? 'is-danger' : ''}` }
                  placeholder="Email"
                  name="email"
                  onChange={ handleChange }
                  value={ formData.email }
                />
              </div>
              { error.email && <small className="help is-danger">
                {formData.email ? 'An account with this email already exists' : error.email }
              </small> }
            </div>

            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input 
                  className={ `input ${error.first_name ? 'is-danger' : '' }` }
                  placeholder="First Name"
                  name="first_name"
                  onChange={ handleChange }
                  value={ formData.first_name }
                />
              </div>
              { error.first_name && <small className="help is-danger">{error.first_name}</small> }
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input 
                  className={ `input ${ error.last_name ? 'is-danger' : '' }` }
                  placeholder="Last Name"
                  name="last_name"
                  onChange={ handleChange }
                  value={ formData.last_name }
                />
              </div>
              { error.last_name && <small className="help is-danger">{error.last_name}</small> }
            </div>

            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input 
                  className={ `input ${ error.mobile ? 'is-danger' : '' }` }
                  placeholder="Phone Number"
                  name="mobile"
                  onChange={ handleChange }
                  value={ formData.mobile }
                />
              </div>
              { error.mobile && <small className="help is-danger">{error.mobile}</small> }
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  className={ `input ${error.password ? 'is-danger' : ''}` }
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={ handleChange }
                  value={ formData.password }
                />
              </div>
              { error.password && <small className="help is-danger">{error.password}</small> }
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input 
                  type="password"
                  className={ `input ${ formData.password !== formData.password_confirmation ? 'is-danger' : ''}` }
                  placeholder="Password Confirmation"
                  name="password_confirmation"
                  onChange={ handleChange }
                  value={ formData.password_confirmation }
                />
              </div>
              { formData.password !== formData.password_confirmation && <small className="help is-danger">Your entered passwords do not match</small> }
            </div>

            {/* <div className="field">
              <label className="label">Would you like to recieve discounts, updates, and promotions via email?</label>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="wants_emails"
                    value="yes"
                    onChange={ handleChange }
                    checked={ formData.wants_emails === 'yes' }
                  />
                    yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="wants_emails"
                    value="no"
                    onChange={ handleChange }
                    checked={ formData.wants_emails === 'no' }
                  />
                    no
                </label>
              </div>
            </div> */}

            <div className="field">
              <div className="inline">
                <label className="checkbox label tickbox">
                  <input
                  // className="tick"
                    type="checkbox"
                    name="wants_emails"
                    checked={formData.wants_emails}
                    onChange={handleChange}
                  />
                </label>
                <p>Would you like to recieve discounts, updates, and promotions via email?</p>
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-fullwidth pink">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
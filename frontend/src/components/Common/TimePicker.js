import React from 'react'
import mobiscroll from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light',
  display: 'bubble'
}

const now = new Date()
const until = new Date(now.getFullYear() + 10, now.getMonth())
const invTime = [{ start: '19:01', end: '9:59' },{ start: new Date(2010, 11, 20), end: new Date(now.getDay - 1) }]

class TimePicker extends React.Component {
  state = {
    val: new Date('2020-12')
  }
  
      setData = (event, inst) => {
        const data = inst.getVal()
        if (data) return this.props.onSet( data )
      }

      render() {
        return (
          <>
            <mobiscroll.Form>
              <mobiscroll.FormGroup>

                <mobiscroll.FormGroupTitle>New Booking</mobiscroll.FormGroupTitle>
                <mobiscroll.Datetime onChange={this.setData} invalid={invTime} steps={{ minute: 10 }} dateWheels="|D M d|">
                  <mobiscroll.Input placeholder="Please Select...">Date & time</mobiscroll.Input>
                </mobiscroll.Datetime>

                {/* <mobiscroll.Time steps={{ minute: 5 }}>
                  <mobiscroll.Input placeholder="Please Select...">Time</mobiscroll.Input>
                </mobiscroll.Time> */}

              </mobiscroll.FormGroup>
            </mobiscroll.Form>
        
          </>
        )
      }    
}

export default TimePicker


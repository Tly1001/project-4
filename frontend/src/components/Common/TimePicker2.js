import React from 'react'
import mobiscroll from '@mobiscroll/react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light',
  display: 'bubble'
}

const dateInv = [ new Date(2018, 1, 3), new Date(2018, 6, 11)]
const recInv = [ '1/1', '1/2', '12/25', '12/26', '7/10', '7/13', '9/10', '11/10' ]
const rangeInv = [{ start: new Date(2018, 0, 27), end: new Date(2018, 2, 15) }]
const timeInv = [
  { d: new Date(), start: '13:00', end: '13:00' },
  { d: new Date(), start: '15:00', end: '15:00' },
  { d: new Date(), start: '15:30', end: '15:30' },
  { d: new Date(), start: '16:00', end: '16:00' }
]
const timeRangeInv = [{ start: '12:00', end: '16:00' }]
const invDate = [{ start: new Date(2018, 11, 20), end: new Date(2018, 11, 31) }]
const valDate = [{ start: new Date(2018, 11, 24), end: new Date(2018, 11, 26) }]
const invTime = [{ start: '13:00', end: '20:00' }]
const valTime = [{ start: '17:00', end: '17:30' }, { start: '18:00', end: '18:30' }]
const stringInv = [ '2018-06-15T00:00', '2018-06-18T00:00' ]
// const momentInv = [ moment([2018, 5, 15]), moment([2018, 5, 18]) ]

class TimePicker2 extends React.Component {
  //   state = {
  //   show = this.show.bind(this)
  // }
    
  // show () {
  //   this.refs.external.instance.show()
  // }
  render() {
    const now = new Date()
    const date = new Date(2018, 7, 1)
    const rec = new Date(2018, 11, 23)
    const week = new Date(2018, 8, 5)
    const dateRange = new Date(2018, 0, 30)
    const dateVal = new Date(2018, 11, 19)
    const timeVal = new Date(new Date().setHours(12, 30, 0, 0))
    const dateStr = '2018-06-13T00:00'
    const moment = new Date(2018, 5, 20)
    return (
      <mobiscroll.Form className="mbsc-form-box">
        <div className="mbsc-grid">
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Invalidating dates</mobiscroll.FormGroupTitle>
            <div className="mbsc-row mbsc-form-grid">
              <div className="mbsc-col-sm-12 mbsc-col-md-6 mbsc-col-xl-3">
                <mobiscroll.Date invalid={dateInv} value={date}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Exact (2018/02/03, 2018/07/11)</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-6 mbsc-col-xl-3">
                <mobiscroll.Date invalid={recInv} value={rec}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Recurring (1/1, 1/2, 12/25, 12/26)</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-6 mbsc-col-xl-3">
                <mobiscroll.Date invalid={['w0', 'w2', 'w6']} value={week}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Weekend (Saturdays, Sundays)</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-6 mbsc-col-xl-3">
                <mobiscroll.Date invalid={rangeInv} value={dateRange}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Range (2018/01/27 - 2018/03/15)</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
            </div>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Invalidating time</mobiscroll.FormGroupTitle>
            <div className="mbsc-row mbsc-form-grid">
              <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Time steps={{ minute: 30 }} invalid={timeInv} value={now}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Exact Time (13:00, 15:00, 15:30, 16:00)</mobiscroll.Input>
                </mobiscroll.Time>
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Time invalid={timeRangeInv} value={now}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Range (between 12:00 and 16:00)</mobiscroll.Input>
                </mobiscroll.Time>
              </div>
            </div>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Overriding inside invalid ranges</mobiscroll.FormGroupTitle>
            <div className="mbsc-row mbsc-form-grid">
              <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Date invalid={invDate} valid={valDate} value={dateVal}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">12/20/2018 - 12/31/2018</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Time invalid={invTime} valid={valTime} value={timeVal}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">13:00 - 20:00</mobiscroll.Input>
                </mobiscroll.Time>
              </div>
            </div>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Date formats</mobiscroll.FormGroupTitle>
            <div className="mbsc-row mbsc-form-grid">
              <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Date invalid={stringInv} value={dateStr}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">String (2018/06/15, 2018/06/18)</mobiscroll.Input>
                </mobiscroll.Date>
              </div>
              {/* <div className="mbsc-col-sm-12 mbsc-col-md-6">
                <mobiscroll.Date invalid={momentInv} value={moment}>
                  <mobiscroll.Input inputStyle="box" labelStyle="stacked">Moment JS (2018/06/15, 2018/06/18)</mobiscroll.Input>
                </mobiscroll.Date>
              </div> */}
            </div>
          </mobiscroll.FormGroup>
        </div>
      </mobiscroll.Form>
    )
  }    
}

export default TimePicker2
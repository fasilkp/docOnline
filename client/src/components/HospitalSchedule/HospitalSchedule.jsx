import React, { useReducer, useState } from 'react'
import { Container } from 'react-bootstrap';
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import './hospitalschedule.css'
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { scheduleReducer } from '../../reducers/scheduleReducer';

export default function HospitalSchedule() {
  const [clicked, setCLicked] = useState(false)
  const handleClick = () => {
    setCLicked(!clicked)
  }
  const scheduleInititalState = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
  }
  const [scheduleState, scheduleDispatch]=useReducer(scheduleReducer)
  console.log(scheduleState)

  const [mon, setMon] = useState({ startDate: null, endDate: null })
  const [tue, setTue] = useState({ startDate: null, endDate: null })
  const [wed, setWed] = useState({ startDate: null, endDate: null })
  const [thu, setThu] = useState({ startDate: null, endDate: null })
  const [fri, setFri] = useState({ startDate: null, endDate: null })
  const [sat, setSat] = useState({ startDate: null, endDate: null })
  const [sun, setSun] = useState({ startDate: null, endDate: null })
  const [time, setTime] = useState(null)
  console.log(new Date(time))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="admin-home">
        <HospitalHeader handleClick={handleClick} />
        <div className="admin-main">
          <HospitalSidebar page={'doctor'} clicked={clicked} />
          <div className="admin-container">
            <Container fluid>
              <h4>Schedule Doctor</h4>
              <div className="doctor-schedule-main">
                <div className="doctor-schedule-container">
                  <div className="time-inputs-item">
                    <h5>MONDAY</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setMon({ ...mon, startDate: item })} />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker'  onChange={(item) => setMon({ ...mon, endDate: item })}  />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setTue({ ...tue, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setTue({ ...tue, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setWed({ ...wed, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setWed({ ...wed, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setThu({ ...thu, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setThu({ ...thu, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setFri({ ...fri, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setFri({ ...fri, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setSat({ ...sat, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setSat({ ...tue, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                  <div className="time-inputs-item">
                    <h5>Tuesday</h5>
                    <div className="time-inputs">
                      <div className="time-input">
                        <DemoItem label="Start Time" >
                          <MobileTimePicker className='time-picker' onChange={(item) => setSun({ ...sun, startDate: item })}  />
                        </DemoItem>
                      </div>
                      <div className="time-input">
                        <DemoItem label="End Time" >
                          <MobileTimePicker className='time-picker'  onChange={(item) => setSun({ ...sun, endDate: item })} />
                        </DemoItem>
                      </div>
                      <button>Add Time</button>
                    </div>
                  </div>
                </div>

              </div>

            </Container>

          </div>
        </div>
      </div>
    </LocalizationProvider>
  )
}

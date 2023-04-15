import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import './hospitalschedule.css'
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function HospitalSchedule() {
  const [clicked, setCLicked] = useState(false)
  const handleClick = () => {
    setCLicked(!clicked)
  }
  const [schedule, setSchedule]=useState({
    mon:[],
    tue:[],
    wed:[],
    thu:[],
    fri:[],
    sat:[],
    sun:[]
  })
  const [mon, setMon]=useState({startDate:null, endDate:null})
  const [tue, setTue]=useState({startDate:null, endDate:null})
  const [wed, setWed]=useState({startDate:null, endDate:null})
  const [thu, setThu]=useState({startDate:null, endDate:null})
  const [fri, setFri]=useState({startDate:null, endDate:null})
  const [sat, setSat]=useState({startDate:null, endDate:null})
  const [sun, setSun]=useState({startDate:null, endDate:null})
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
              <h5>Schedule Doctor</h5>
              <div className="doctor-schedule-main">
                <div className="doctor-schedule-container">
                  <div className="time-inputs-item">
                  <h6>MONDAY</h6>
                  <div className="time-inputs">
                    <div className="time-input">
                      <DemoItem label="Start Time" >
                        <MobileTimePicker className='time-picker'  onChange={(item)=>setMon({...mon,startDate:item})} small />
                      </DemoItem>
                    </div>
                    <div className="time-input">
                      <DemoItem label="End Time" >
                        <MobileTimePicker className='time-picker' value={mon.endDate} onChange={(item)=>setMon({...mon,endDate:item})} defaultValue={dayjs('2022-04-17T15:30')} small />
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

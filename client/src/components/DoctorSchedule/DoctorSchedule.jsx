import React, { useEffect, useReducer } from 'react'
import { Container } from 'react-bootstrap';
import '../HospitalSchedule/hospitalschedule.css'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { scheduleReducer } from '../../reducers/scheduleReducer';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSidebar from '../DoctorSidebar/DoctorSidebar';
import { useSelector } from 'react-redux';
import DoctorBottomNav from '../DoctorBottom/DoctorBottom';

export default function DoctorSchedule() {
    const navigate = useNavigate()
    const scheduleInititalState = {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
    }

    const doctorId=useSelector((state) => {return state.doctor.details._id;});


    useEffect(() => {
        (async function () {
            if(doctorId){
                const { data } = await axios.get("/doctor/schedule/");
                if (!data.err) {
                    scheduleDispatch({ type: 'all', payload: data.schedule })
                }
            }
        })()
    }, [doctorId])
    const [scheduleState, scheduleDispatch] = useReducer(scheduleReducer, scheduleInititalState)


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="admin-home">
                <DoctorHeader />
                <div className="admin-main">
                    <DoctorSidebar page={'schedule'} />
                    <div className="admin-container">
                        <Container fluid>
                            <h4>Schedule</h4>
                            <div className="doctor-schedule-main">
                                <div className="doctor-schedule-container">
                                    {/* <div className="time-inputs-item">
                  </div> */}
                                    <div className="time-inputs-item">
                                        <h5>MONDAY</h5>
                                        <div className="time-inputs">
                                            <div className="time-input">
                                                <DemoItem label="Start Time" >
                                                </DemoItem>
                                            </div>
                                            <div className="time-input">
                                                <DemoItem label="End Time" >
                                                </DemoItem>
                                            </div>
                                            <div className="time-input">
                                                <DemoItem label="Slot" >
                                                </DemoItem>
                                            </div>
                                        </div>
                                        {
                                            scheduleState.mon.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }
                                    </div>
                                    {
                                        scheduleState.tue[0] &&
                                        <div className="time-inputs-item">
                                        <h5>TUESDAY</h5>
                                        {
                                            scheduleState.tue.map((item, index) => {
                                                return (<div className="time-inputs" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }

                                    </div>
                                    }
                                    {
                                        scheduleState.wed[0] &&
                                        <div className="time-inputs-item">
                                        <h5>WEDNESDAY</h5>
                                        {
                                            scheduleState.wed.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }

                                    </div>
                                    }
                                    {
                                        scheduleState.thu[0] &&
                                        <div className="time-inputs-item">
                                        <h5>THURSDAY</h5>
                                        {
                                            scheduleState.thu.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }

                                    </div>
                                    }
                                    {
                                        scheduleState.fri[0] &&
                                        <div className="time-inputs-item">
                                        <h5>FRIDAY</h5>
                                        {
                                            scheduleState.fri.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }

                                    </div>
                                    }
                                    {
                                        scheduleState.sat[0] &&
                                    <div className="time-inputs-item">
                                        <h5>SATURDAY</h5>
                                        {
                                            scheduleState.sat.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }

                                    </div>
                                    }

                                    {
                                        scheduleState.sat[0] &&

                                        <div className="time-inputs-item">
                                        <h5>SUNDAY</h5>
                                        {
                                            scheduleState.sun.map((item, index) => {
                                                return (<div className="time-inputs mt-2" key={index}>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly value={new Date(item.startDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <MobileTimePicker className='time-picker' readOnly
                                                            value={new Date(item.endDate)} />
                                                    </div>
                                                    <div className="time-input">
                                                        <TextField id="outlined-basic" size='small' readOnly
                                                            type='number'
                                                            value={item.slot}
                                                            variant="outlined" />
                                                    </div>
                                                </div>)

                                            })
                                        }
                                    </div>
                                    }
                                </div>

                            </div>

                        </Container>

                    </div>
                </div>
            <DoctorBottomNav page={'schedule'} />

            </div>
        </LocalizationProvider>
    )
}

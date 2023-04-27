import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { RiMore2Fill, RiSearch2Line } from 'react-icons/ri';
import Swal from 'sweetalert2'
import { Backdrop, CircularProgress, setRef } from '@mui/material';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import { useDispatch, useSelector } from 'react-redux'
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import AddDoctor from '../../Modal/AddDoctor/AddDoctor';
import { useEffect } from 'react';
import EditDoctor from '../../Modal/editDoctor/EditDoctor';
import { Link, useNavigate } from 'react-router-dom';
import { getHospitalBookings } from '../../api/hospitalApi';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import './HospitalReport.css'

export default function HospitalReport() {
    const [refresh, setRefresh] = useState(false)
    const [load, setLoad] = useState(false)
    const { hospital } = useSelector((state) => state)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [bookingList, setBookingList] = useState([])
    const [clicked, setCLicked] = useState(false)
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        setCLicked(!clicked)
    }
    useEffect(() => {
        (
            async function () {
                const data = await getHospitalBookings(name);
                if (!data.err) {
                    setBookingList(data.bookings)
                }
            }
        )()
    }, [refresh, name]);

    return (
        <div className="admin-home">

            <HospitalHeader handleClick={handleClick} />
            <div className="admin-main">
                <HospitalSidebar page={'reports'} clicked={clicked} />
                <Container fluid>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>


                        <div className="admin-container">
                            <div className="container-header">
                                <h5>Doctors</h5>
                                <div className="admin-search-box">
                                    <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                                    <button><RiSearch2Line /></button>
                                </div>
                                {/* <button className='btn btn-dark' onClick={addDoctor}>Add Doctor</button> */}
                            </div>
                            <Row>

                                <Container fluid>
                                    <Row>

                                        <Col md={6} >
                                            <div className="report-box">
                                                <div className="report-input">
                                                    <h5>Choose Date</h5>
                                                </div>
                                                <div className="report-input">
                                                    <div className="report-input-row">
                                                        {/* <div className="report-input-radio">
                                                            <input type="radio" id='thisweek' name='date' />
                                                            <label htmlFor="thisweek">This Week</label>
                                                        </div> */}
                                                        <div className="report-input-radio">
                                                            <input type="radio" id='lastweek' name='date' />
                                                            <label htmlFor="lastweek">Last Week</label>
                                                        </div>
                                                    </div>
                                                    <div className="report-input-row">
                                                        <div className="report-input-radio">
                                                            <input type="radio" id='thismonth' name='date' />
                                                            <label htmlFor="thismonth">This Month</label>
                                                        </div>
                                                        <div className="report-input-radio">
                                                            <input type="radio" id='lastmonth' name='date' />
                                                            <label htmlFor="lastmonth">Last month</label>
                                                        </div>
                                                    </div>
                                                    <div className="report-input-row">
                                                        <div className="report-input-radio">
                                                            <input type="radio" id='thisyear' name='date' />
                                                            <label htmlFor="thisyear">This Year</label>
                                                        </div>
                                                        <div className="report-input-radio">
                                                            <input type="radio" id='lastyear' name='date' />
                                                            <label htmlFor="lastyear">Last Year</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="report-input">
                                                    <div className="report-input-date-picker">
                                                        <h5>Choose time</h5>
                                                    </div>
                                                    <div className="report-input-row">
                                                        <div className="report-input-date-picker">
                                                            <MobileDatePicker className='w-100' />
                                                        </div>
                                                        <div className="report-input-date-picker">
                                                            <MobileDatePicker className='w-100' />
                                                        </div>
                                                    </div>
                                                    
                                                    {/* <div className="report-input-date-picker">
                                                    <input type="radio" id='lastweek' name='date' />
                                                    <label htmlFor="lastweek">Last Week</label>
                                                </div> */}

                                                </div>

                                            </div>

                                        </Col>
                                        <Col md={6} >
                                            <div className="report-box total">
                                                <div className="report-box-item">
                                                    <h6>Total</h6>
                                                    <h3>4500</h3>
                                                </div>
                                                <div className="report-box-item">
                                                    <h6>Total</h6>
                                                    <h3>4500</h3>
                                                </div>
                                                <div className="report-box-item">
                                                    <h6>Total</h6>
                                                    <h3>4500</h3>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col md={6} >
                                            <Table className='table-main' responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Patient Name</th>
                                                        <th>Doctor</th>
                                                        <th>Fees</th>
                                                        <th>Date</th>
                                                        <th>Time</th>
                                                        <th>option</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        bookingList.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {/* <Link to={"/doctor/"+item._id}> */}
                                                                    {item.patientName}
                                                                    {/* </Link> */}
                                                                </td>
                                                                <td>{item.doctorId.name}</td>
                                                                <td>{item.fees}</td>
                                                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                                                <td>{new Date(item.time).toLocaleTimeString('en-US')}</td>
                                                                <td className='option-btn'>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                                            <RiMore2Fill />
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu>
                                                                            {/* <Dropdown.Item href="#" onClick={() => { navigate('/account/hospital/schedule/'+item._id) }}>Schedule</Dropdown.Item> */}
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col md={6} >
                                            <Table className='table-main' responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Total</th>
                                                        <th>Count</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        bookingList.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {/* <Link to={"/doctor/"+item._id}> */}
                                                                    {item.patientName}
                                                                    {/* </Link> */}
                                                                </td>
                                                                <td>{item.doctorId.name}</td>

                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>

                                </Container>
                            </Row>



                        </div>
                    </LocalizationProvider>

                </Container>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={load}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    );
}
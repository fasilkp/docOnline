import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
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

export default function HospitalBooking() {
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
                <HospitalSidebar page={'booking'} clicked={clicked} />
                <Container fluid>

                    <div className="admin-container">
                        <div className="container-header">
                            <h5>Doctors</h5>
                            <div className="admin-search-box">
                                <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                                <button><RiSearch2Line /></button>
                            </div>
                            {/* <button className='btn btn-dark' onClick={addDoctor}>Add Doctor</button> */}
                        </div>
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
                                    bookingList[0] ?
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
                                    :
                                    <tr>
                                        <th colSpan={7} className='text-center'>No data found</th>
                                    </tr>
                                }
                            </tbody>
                        </Table>

                    </div>
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
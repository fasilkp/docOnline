import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import AddEMR from '../../Modal/AddEMR/AddEMR';
import DoctorBottomNav from '../DoctorBottom/DoctorBottom';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSideBar from '../DoctorSidebar/DoctorSidebar';

function DoctorHome() {
    const [bookingList, setBookingList] = useState([])
    const [booking, setBooking] = useState({})
    const [showAddEmr, setShowAddEmr] = useState(false)
    useEffect(() => {
        (
            async function () {
                const { data } = await axios.get("/doctor/booking/today");
                console.log(data)
                console.log(data)
                if (!data.err) {
                    setBookingList(data.bookings)
                }
            }
        )()
    }, []);

    const showEmr = (data) => {
        setBooking(data);
        setShowAddEmr(true)
    }

    return (
        <div className="admin-home">
            <DoctorHeader />
            <div className="admin-main">
                <DoctorSideBar page={'home'} />
                <div className="admin-container">

                    <Container fluid>

                        <div className="user-booking-container">
                            <h4 className=''>Todays Booking</h4>
                            {

                                bookingList.map((item, index) => {
                                    return <div className="user-booking-item" key={index} onClick={()=>showEmr(item)}>
                                        <div className="ub-dr-desc">
                                            <div className="ub-dr-desc-item">
                                                <b>{item.patientName}</b>
                                                <div className="mt-2">
                                                    <p>Date : </p>
                                                    <p> {new Date(item.date).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <p>Time : </p>
                                                    <p> {new Date(item.time).toLocaleTimeString('en-US')}</p>
                                                </div>
                                                <div>
                                                    <p>Token : </p>
                                                    <p> {item.token}</p>
                                                </div>

                                            </div>
                                            <div className="booking-status">
                                                <Chip label="pending" color="secondary" variant="outlined" />
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </Container>


                </div>
            </div>
            {
                showAddEmr &&
                <AddEMR booking={booking} setShowAddEmr={setShowAddEmr} />
            }
            <DoctorBottomNav page={'home'} />
        </div>
    )
}

export default DoctorHome
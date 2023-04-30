import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSideBar from '../DoctorSidebar/DoctorSidebar';
import doctorImg from '../../assets/images/doctor.png'
import './doctorProfile.css'
import { Avatar, BottomNavigation, BottomNavigationAction, Rating } from '@mui/material';
import { Ri24HoursFill, Ri4KFill, RiAB } from 'react-icons/ri';
import DoctorBottom from '../DoctorBottom/DoctorBottom';
import DoctorBottomNava from '../DoctorBottom/DoctorBottom';
import DoctorBottomNav from '../DoctorBottom/DoctorBottom';
import EditDoctorProfile from '../../Modal/EditDoctorProfile/EditDoctorProfile';
import axios from 'axios';
import { getDoctorProfile } from '../../api/doctorApi';

export default function DoctorProfile() {
    const [value, setValue]=useState('')
    const [showModal, setShowModal]=useState(false)
    const [refresh, setRefresh]=useState(false)
    const [doctor, setDoctor]=useState({
        image:{
            url:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }
    })

    useEffect(() => {
        (
            async function(){
                const data =await getDoctorProfile();
                if(!data.err){
                    setDoctor({...data.doctor,reviews:data.reviews })
                }
            }

        )()
        
    }, [refresh]);

    return (
        <div className="admin-home">
            <DoctorHeader />
            <div className="admin-main">
                <DoctorSideBar page={'profile'} />
                <div className="admin-container">
                    <Container>
                        <h5>Profile</h5>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={4}>
                                <div className="dr-profile-sec sec-1">
                                    <div className="dr-profile-img">
                                        <img src={doctor.image.url} alt="" />
                                    </div>
                                    <button className='mt-3 btn btn-dark' onClick={()=>setShowModal(true)}>Edit Profile Picture</button>

                                </div>

                            </Col>
                            <Col sm={12} md={8}>
                                <div className="dr-profile-sec sec-2">
                                    <div className="dr-profile-sec-row head">
                                        <h5>{doctor.name}</h5>
                                        <p>{doctor.department && doctor.department.name.toUpperCase()} Department</p>
                                    </div>

                                    <div className="dr-profile-sec-row">
                                        <h6>Fees</h6>
                                        <b>₹{doctor.fees}</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>About</h6>
                                        <p>{doctor.about}</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12} md={4}>
                            <div className="dr-profile-sec sec-1">
                                <div className="dr-profile-sec-row">
                                    <h6>Email</h6>
                                    <p>{doctor.email}</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>Hospital</h6>
                                    <p>{doctor.hospitalId && doctor.hospitalId.name}</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>About</h6>
                                    <p>{doctor.about}</p>
                                </div>

                            </div>

                            </Col>
                            <Col sm={12} md={8}>
                                <div className="dr-profile-sec sec-2">
                                    <div className="dr-profile-sec-row" style={{ gap: "5px" }}>
                                        <b>Rating and Review</b>
                                        <div className='dr-profile-rating mt-3'>
                                            <b style={{ fontSize: ".8rem" }}>4.5 Rating</b>
                                            <Rating name="read-only" value={4} readOnly size='small' />
                                        </div>

                                        <p style={{ fontSize: ".8rem" }}>total 341 rating and 219 reviews</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <div className="dr-profile-reviews">
                                        {
                                            doctor.reviews &&
                                            doctor.reviews.map((item, index) => {

                                                return <div className="dr-profile-review">
                                                    <div className="head-sec">
                                                        <Avatar
                                                            alt="Remy Sharp"
                                                            src="/static/images/avatar/1.jpg"
                                                            sx={{ width: 32, height: 32 }}
                                                        />
                                                        <div className="d-flex flex-column">
                                                            <b>{item.userId.name}</b>
                                                            <Rating value={item.rating}
                                                                readOnly
                                                                size="small" />

                                                        </div>
                                                    </div>
                                                    <p className="dr-profile-review-desc">
                                                        {item.review}
                                                    </p>
                                                </div>
                                            })
                                        }
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
                    {
                        showModal &&
                    <EditDoctorProfile setShowModal={setShowModal} refresh={refresh} setRefresh={setRefresh}  />
                    }
            <DoctorBottomNav page={'profile'} />
        </div>
    )
}

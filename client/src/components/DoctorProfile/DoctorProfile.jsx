import React, { useState } from 'react'
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

export default function DoctorProfile() {
    const [value, setValue]=useState('')
    console.log(value)
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
                                        <img src={doctorImg} alt="" />
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={8}>
                                <div className="dr-profile-sec sec-2">
                                    <div className="dr-profile-sec-row head">
                                        <h5>Dr James</h5>
                                        <p>Paediatrician</p>
                                    </div>

                                    <div className="dr-profile-sec-row">
                                        <h6>Fees</h6>
                                        <b>₹250</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>About</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore tempora sequi ut et alias voluptatum quaerat impedit aspernatur incidunt accusamus.</p>
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
                                        <h6>Place</h6>
                                        <p>Tirur, Malappuram</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Address</h6>
                                        <p>National Complex, Tirur</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Mobile</h6>
                                        <p>9865235695</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>email</h6>
                                        <p>mail@example.com</p>
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
                                            <div className="dr-profile-review">
                                                <div className="head-sec">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/static/images/avatar/1.jpg"
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                    <b>Remi Sharp</b>
                                                </div>
                                                <p className="dr-profile-review-desc">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                                </p>
                                            </div>
                                            <div className="dr-profile-review">
                                                <div className="head-sec">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/static/images/avatar/1.jpg"
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                    <b>Remi Sharp</b>
                                                </div>
                                                <p className="dr-profile-review-desc">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                                </p>
                                            </div>
                                            <div className="dr-profile-review">
                                                <div className="head-sec">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/static/images/avatar/1.jpg"
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                    <b>Remi Sharp</b>
                                                </div>
                                                <p className="dr-profile-review-desc">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                                </p>
                                            </div>
                                            <div className="dr-profile-review">
                                                <div className="head-sec">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="/static/images/avatar/1.jpg"
                                                        sx={{ width: 32, height: 32 }}
                                                    />
                                                    <b>Remi Sharp</b>
                                                </div>
                                                <p className="dr-profile-review-desc">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
            <DoctorBottomNav page={'profile'} />
        </div>
    )
}

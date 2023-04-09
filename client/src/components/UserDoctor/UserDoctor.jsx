import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import doctorImg from '../../assets/images/doctor.png'
import { Avatar, Rating } from "@mui/material"
import '../DoctorProfile/doctorProfile.css'
import { useParams } from "react-router-dom"
import axios from "axios"
function UserDoctor() {
    const {id} = useParams()
    const [doctor, setDoctor]=useState({
        image:{
            url:"https://bharajhospital.in/wp-content/uploads/2015/11/doctor-placeholder-500x500.jpg"
        },
        department:{
            name:" "

        }
    })
      useEffect(()=>{
        (
            async function(){
                const {data}= await axios.get("/user/doctor/"+id);
                if(!data.err){
                    setDoctor(data.doctor)
                }
                console.log(data)
            }
        )()
    },[])
    

    return (
        <div className="user-main">

            <UserHeader />
            <Container>
            <div className="admin-container">
                    {/* <Container>
                        <h5>Profile</h5>
                    </Container> */}
                    {/* <Container> */}
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="dr-profile-sec sec-1">
                                    <div className="dr-profile-img">
                                        <img src={doctor.image.url} alt="" />
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={7}>
                                <div className="dr-profile-sec sec-2">
                                    <div className="dr-profile-sec-row head">
                                        <h5>{doctor.name}</h5>
                                        <p>{doctor.department.name.toUpperCase()} Department</p>
                                    </div>

                                    <div className="dr-profile-sec-row">
                                        <h6>Fees</h6>
                                        <b>₹{doctor.fees}</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Qualification</h6>
                                        <b>{doctor.qualification}</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>About</h6>
                                        <p>{doctor.about}</p>
                                    </div>
                                    <div className="dr-profile-sec-row button">
                                        <button>Book Now</button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    {/* </Container> */}
                    {/* <Container> */}
                        <Row>
                            <Col sm={12} md={5}>
                                <div className="dr-profile-sec sec-1">
                                    {/* <div className="dr-profile-sec-row">
                                        <h6>Place</h6>
                                        <p>{doctor.place}</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Address</h6>
                                        <p>{doctor.address}</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Mobile</h6>
                                        <p>{doctor.mobile}</p>
                                    </div> */}
                                    <div className="dr-profile-sec-row">
                                        <h6>email</h6>
                                        <p>{doctor.email}</p>
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={7}>
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
                    {/* </Container> */}

                </div>
            </Container>
        </div>
    )
}

export default UserDoctor
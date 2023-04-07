import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React from 'react'
import hospitalImg from '../../assets/images/hospital.jpg'
import { Avatar, Rating } from "@mui/material"
import '../DoctorProfile/doctorProfile.css'
import UserDepartmentRow from "../UserDepartmentRow/UserDepartmentRow"
function UserHospital() {

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
                                        <img src={hospitalImg} alt="" />
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={7}>
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
                                    {/* <div className="dr-profile-sec-row button">
                                        <button>Book Now</button>
                                    </div> */}
                                </div>

                            </Col>
                        </Row>
                    {/* </Container> */}
                    {/* <Container> */}
                        <Row>
                            <UserDepartmentRow list={[]}/>
                        </Row>
                    {/* </Container> */}

                </div>
            </Container>
        </div>
    )
}

export default UserHospital
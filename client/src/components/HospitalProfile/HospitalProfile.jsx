import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import hospitalImg from '../../assets/images/hospital.jpg'
import { Avatar, Rating } from "@mui/material"
import '../DoctorProfile/doctorProfile.css'
import UserDepartmentRow from "../UserDepartmentRow/UserDepartmentRow"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import HospitalHeader from "../HospitalHeader/HospitalHeader"

export default function HospitalProfile() {
    const id = useSelector((state)=>state.hospital.details._id)
    console.log(id);
    const [departmentList, setDepartmentList]=useState([])
    const [hospital, setHospital]=useState({
        image:{
            url:"https://www.medibhai.com/uploads/hospital_image/hospital-profile-default.jpg"
        }
    })
      useEffect(()=>{
        (
            async function(){
                const {data}= await axios.get("/user/hospital/"+id);
                if(!data.err){
                    setHospital(data.hospital)
                    setDepartmentList(data.departments)
                }
                console.log(data)
            }
        )()
    },[])
    return (
        <div className="user-main">

            <HospitalHeader />
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
                                        <img src={hospital.image.url} alt="" />
                                    </div>

                                </div>

                            </Col>
                            <Col sm={12} md={7}>
                                <div className="dr-profile-sec sec-2">
                                    <div className="dr-profile-sec-row head">
                                        <h5>{hospital.name}</h5>
                                        {/* <p>Paediatrician</p> */}
                                    </div>

                                    <div className="dr-profile-sec-row">
                                        <h6>Place</h6>
                                        <b>{hospital.place}</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Address</h6>
                                        <b>{hospital.address}</b>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>About</h6>
                                        <b>{hospital.about}</b>
                                    </div>
                                    <div className="dr-profile-sec-row button">
                                        <button>Edit</button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    {/* </Container> */}
                    {/* <Container> */}
                        <Row>
                            <UserDepartmentRow hospitalId={id} hospitalWise={true} list={departmentList}/>
                        </Row>
                    {/* </Container> */}

                </div>
            </Container>
            EditHosp
        </div>
    )
}

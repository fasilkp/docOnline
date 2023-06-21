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
import EditHospitalProfile from "../../Modal/EditHospitalProfile/EditHospitalProfile"
import { getHospitalProfile } from "../../api/hospitalApi"

export default function HospitalProfile() {
    const id = useSelector((state)=>state.hospital.details._id)
    const [departmentList, setDepartmentList]=useState([])
    const [showModal, setShowModal]=useState(false)
    const [refresh, setRefresh]=useState(false)
    const [hospital, setHospital]=useState({
        image:{
            url:"https://www.medibhai.com/uploads/hospital_image/hospital-profile-default.jpg"
        }
    })
      useEffect(()=>{
        (
            async function(){
                const data= await getHospitalProfile();
                if(!data.err){
                    setHospital({
                        ...data.hospital,reviews: data.reviews, rating: data.rating
                    })
                    setDepartmentList(data.departments)
                }
            }
        )()
    },[refresh])
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
                                        <button onClick={()=>setShowModal(true)}>Edit</button>
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
                    <Row>
                    <div className="dr-profile-sec sec-2">
                                <div className="dr-profile-sec-row" style={{ gap: "5px" }}>
                                    <b>Rating and Review</b>
                                    <div className='dr-profile-rating mt-3'>
                                        <b style={{ fontSize: ".8rem" }}>Rating {hospital.rating} </b>
                                        {
                                            hospital.rating ?
                                            < Rating name="read-only" value={hospital.rating} readOnly size='small'
                                            />
                                            : null
                                        }
                                    </div>

                                    <p style={{ fontSize: ".8rem" }}>total {hospital.reviews && hospital.reviews.length} rating and reviews</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <div className="dr-profile-reviews">
                                        {
                                            hospital.reviews &&
                                            hospital.reviews.map((item, index) => {

                                                return <div className="dr-profile-review"  key={index}>
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
                    </Row>

                </div>
            </Container>
            {
                showModal &&
                <EditHospitalProfile refresh={refresh} setRefresh={setRefresh} hospital={hospital} setShowModal={setShowModal} />
            }
        </div>
    )
}

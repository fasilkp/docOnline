import { Rating } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import doctorImg from '../../assets/images/doctor.png'
import './doctorlist.css'

function DoctorList() {
  return (
    <div>
        <Row>
            <h5>Doctors</h5>

        </Row>
        <Row>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="dr-container">
                    <div className="dr-container-profile" style={{backgroundImage:`url(${doctorImg})`}}>
                        
                    </div>
                    <div className="dr-container-profile-desc">
                        <h6>Dr. Eren Yeager</h6>
                        <Rating name="size-small" defaultValue={2} size="small" />
                        <div className="desc">
                            <span>MBBS, MD</span>
                            <span>Skin Specialist</span>
                            <span>International Hospital</span>
                        </div>
                    </div>
                </div>
            </Col>

        
        </Row>
    </div>
  )
}

export default DoctorList
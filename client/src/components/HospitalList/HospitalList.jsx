import { Rating } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import hospitalImg from '../../assets/images/hospital.jpg'
import './hospitallist.css'

function HospitalList() {
  return (
    <div>
        <Row>
            <h5>Hospitals</h5>

        </Row>
        <Row>
            <Col md={4} lg={3} xs={12} className="p-2">
                <div className="hs-container">
                    <div className="hs-container-profile" style={{backgroundImage:`url(${hospitalImg})`}}>
                        
                    </div>
                    <div className="hs-container-profile-desc">
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
                <div className="hs-container">
                    <div className="hs-container-profile" style={{backgroundImage:`url(${hospitalImg})`}}>
                        
                    </div>
                    <div className="hs-container-profile-desc">
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
                <div className="hs-container">
                    <div className="hs-container-profile" style={{backgroundImage:`url(${hospitalImg})`}}>
                        
                    </div>
                    <div className="hs-container-profile-desc">
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
                <div className="hs-container">
                    <div className="hs-container-profile" style={{backgroundImage:`url(${hospitalImg})`}}>
                        
                    </div>
                    <div className="hs-container-profile-desc">
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
                <div className="hs-container">
                    <div className="hs-container-profile" style={{backgroundImage:`url(${hospitalImg})`}}>
                        
                    </div>
                    <div className="hs-container-profile-desc">
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

export default HospitalList
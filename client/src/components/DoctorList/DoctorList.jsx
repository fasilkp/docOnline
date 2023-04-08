import { Rating } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import doctorImg from '../../assets/images/doctor.png'
import './doctorlist.css'

function DoctorList({ list }) {
    return (
        <div>
            <Row>
                <h5>Doctors</h5>

            </Row>
            <Row>
                {
                    list.map((item, index) => {

                        return <Col md={4} lg={3} xs={12} key={index} className="p-2">
                            <div className="dr-container">
                                <div className="dr-container-profile" style={{ backgroundImage: `url(${item.image.url})` }}>

                                </div>
                                <div className="dr-container-profile-desc">
                                    <h6>{item.name}</h6>
                                    <Rating name="size-small" defaultValue={2} size="small" />
                                    <div className="desc">
                                        <span>{item.specialization}</span>
                                        <span>{item.qualification}</span>
                                        <span>{item.hospitalId.name}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    })
                }



            </Row>
        </div>
    )
}

export default DoctorList
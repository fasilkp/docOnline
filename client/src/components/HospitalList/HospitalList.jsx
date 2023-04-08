import { Rating } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import hospitalImg from '../../assets/images/hospital.jpg'
import './hospitallist.css'

function HospitalList({ list }) {
    return (
        <div>
            <Row>
                <h5>Hospitals</h5>

            </Row>
            <Row>
                {
                    list.map((item, index) => {

                        return <Col md={4} lg={3} xs={12} key={index} className="p-2">
                            <Link to={"/hospital/"+item._id}>
                                <div className="hs-container">
                                    <div className="hs-container-profile" style={{ backgroundImage: `url(${item.image.url})` }}>

                                    </div>
                                    <div className="hs-container-profile-desc">
                                        <h6>{item.name}</h6>
                                        <Rating name="size-small" defaultValue={3} readOnly size="small" />
                                        <div className="desc">
                                            <span>{item.address}</span>
                                            <span>{item.place}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    })
                }



            </Row>
        </div>
    )
}

export default HospitalList
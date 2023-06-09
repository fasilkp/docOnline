import { Rating } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import doctorImg from '../../assets/images/doctor.png'
import noResultImg from '../../assets/images/no-result.png'
import './doctorlist.css'

function DoctorList({ list, title, rating }) {
    return (
        <div>
            <Row className='d-flex justify-content-center'>
                <h5 className='text-center'>{title ? title : "Doctors"}</h5>

            </Row>
            <Row className='d-flex justify-content-center mt-5'>
                {
                    list[0] ?
                    list.map((item, index) => {

                        return <Col md={4} xs={12} key={index} className="p-2">
                            <Link to={"/doctor/"+item._id}>
                                <div className="dr-container">
                                    <div className="dr-container-profile" style={{ backgroundImage: `url(${item.image.url})` }}>

                                    </div>
                                    <div className="dr-container-profile-desc">
                                        <h5>{item.name}</h5>
                                        <Rating name="size-small" readOnly defaultValue={rating?.[item._id]} size="small" />
                                        <div className="desc">
                                            <b>₹{item.fees}</b>
                                            <span>{item.department.name}</span>
                                            <span>{item.hospitalId.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    })
                    :
                    <div className='no-result-container'>
                        <img src={noResultImg} alt="" />
                    </div>
                }



            </Row>
        </div>
    )
}

export default DoctorList
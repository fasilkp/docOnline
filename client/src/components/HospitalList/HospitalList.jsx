import { Rating } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import hospitalImg from '../../assets/images/hospital.jpg'
import noResultImg from '../../assets/images/no-result.png'

import './hospitallist.css'

function HospitalList({ list }) {
    console.log(list)
    return (
        <div>
            <Row>
                <h5>Hospitals</h5>

            </Row>
            <Row>
                {
                    list[0] ?
                    list.map((item, index) => {

                        return <Col md={4} xs={12} key={index} className="p-2">
                            <Link to={"/hospital/"+item._id}>
                                <div className="hs-container">
                                    <div className="hs-container-profile" style={{ backgroundImage: `url(${item.image.url})` }}>

                                    </div>
                                    <div className="hs-container-profile-desc">
                                        <h5>{item.name}</h5>
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
                    :
                    <div className='no-result-container'>
                        <img src={noResultImg} alt="" />
                    </div>
                }



            </Row>
        </div>
    )
}

export default HospitalList
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './userDepartmentRow.css'
import img1 from '../../assets/images/department/01.jpg'

function UserDepartmentRow({ list }) {
    return (
        <Container>

            <Row>
                <div className="department-row-main">
                    <div className="department-row-container">
                        <Container>
                            <Row className='mt-5'>
                                <h5>Departments</h5>
                            </Row>
                        </Container>
                        <Container>

                            <Row className='mt-1'>
                                {
                                    list.map((item, index) => {
                                        return <Col xs={6} md={2} key={index}>
                                            <div className="department-item mt-3" >
                                                <div className="department-item-box">
                                                    <img src={img1} alt="" />
                                                    <b>{item.name}</b>
                                                </div>

                                            </div>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>
                        <Row className='mt-5'></Row>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default UserDepartmentRow
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './userDepartmentRow.css'
import img1 from '../../assets/images/department/01.jpg'

function UserDepartmentRow({ list }) {
    return (
        <Container fluid>
            <div className="department-row-main">
                <div className="department-row-container">
                        <Container fluid>
                    <Row className='mt-5'>
                        <h5>Departments</h5>
                    </Row>
                        </Container>
                    <Row className='mt-3'>
                        {
                            list.map((item, index) => {
                                return <Col xs={6} md={2} key={index}>
                                    <div  className="department-item">
                                        <div className="department-item-box">
                                            <img src={img1} alt="" />
                                            <b>{item._id}</b>
                                        </div>

                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                    <Row className='mt-5'></Row>
                </div>
            </div>
        </Container>
    )
}

export default UserDepartmentRow
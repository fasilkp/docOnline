import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import emailSentImage from '../../assets/images/emailSent.jpg'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';

function HospitalForgot() {
    return (
        <div className="login-main">
            <Row>
                <nav className='login-nav'>
                    <Container>
                        <Row>
                            <h3>docOnline</h3>
                            <b style={{marginTop:"-10px"}}>Hopital Panel</b>

                        </Row>
                    </Container>
                </nav>
            </Row>
            <Row>
                <div className="login-container">
                    <Row>

                    <Col md={6}>
                        <div className="login-sec bg">
                            <img src={emailSentImage} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="login-sec">
                            <div className="login-box">
                                <div className="login-row head">
                                    <h3>Forgot Password</h3>
                                </div>
                                <div className="login-row head">
                                    <b>Enter the email</b>
                                </div>
                                <div className="login-row w-100 mt-3">
                                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row">
                                    <button>Next</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Row>
        </div>
    )
}

export default HospitalForgot
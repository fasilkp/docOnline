import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import otpImage from '../../utils/images/otp.webp'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';

function VerifyOtp() {
    return (
        <div className="login-main">
            <Row>
                <nav className='login-nav'>
                    <Container>
                        <Row>
                            <h3>docOnline</h3>
                        </Row>
                    </Container>
                </nav>
            </Row>
            <Row>
                <div className="login-container">
                    <Row>

                    <Col md={6}>
                        <div className="login-sec bg">
                            <img src={otpImage} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="login-sec sec-2">
                            <div className="login-box">
                                <div className="login-row head">
                                    <h3>Verify Email</h3>
                                </div>
                                <div className="login-row head">
                                    <b>Enter the OTP</b>
                                </div>
                                <div className="login-row w-100 mt-3">
                                    <TextField id="outlined-basic" label="Email" type="number" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row">
                                    <button>Check</button>
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

export default VerifyOtp
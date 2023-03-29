import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../utils/images/login.jpg'
import "./userlogin.css"

function UserLogin() {
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
                            <img src={loginImage} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="login-sec">
                            <div className="login-box">
                                <div className="login-row head">
                                    <h3>Login</h3>
                                </div>
                                <div className="login-row w-100 mt-3">
                                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row">
                                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className='input' fullWidth/>
                                </div>
                                <div className="login-row">
                                    <button>login</button>
                                </div>
                                <div className="login-row">
                                    <a href="">Don't Have an Account? Signin</a>
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

export default UserLogin
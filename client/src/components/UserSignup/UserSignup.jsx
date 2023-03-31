
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';

function UserSignup() {
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
    
                        <Col md={6} sm={4}>
                            <div className="login-sec bg">
                                <img src={loginImage} alt="" />
                            </div>
                        </Col>
                        <Col md={6} sm={8}>
                            <div className="login-sec">
                                <form className="login-box">
                                    <div className="login-row head">
                                        <h3>Signup</h3>
                                    </div>
                                    <div className="login-row w-100 mt-3">
                                        <TextField id="outlined-basic" label="Name" type="text" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row w-100">
                                        <TextField id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className='input' fullWidth/>
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" className='input' fullWidth/>
                                    </div>
                                    <div className="login-row">
                                        <button type='submit'>Sign Up</button>
                                    </div>
                                    <div className="login-row mt-3">
                                        <Link to="/login">Already Have an Account? Login</Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        )

}

export default UserSignup
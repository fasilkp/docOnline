import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "./userlogin.css"
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function UserLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMessage, setErrMessage] = useState("")

    const validForm = () => {
        if (password.trim() === "" || email.trim() === "") {
            return false
        }
        return true
    }
    const [loading, setLoading] = useState({
        submit: false
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading({...loading, submit:true})
    }
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
                                <form className="login-box" onSubmit={handleSubmit}>
                                    <div className="login-row head">
                                        <h3>Login</h3>
                                    </div>
                                    <div className="login-row w-100 mt-3">
                                        <TextField id="outlined-basic" name='email' onChange={(e) => setEmail(e.target.value)} label="Email" type="email" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" name='password' onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" className='input' fullWidth />
                                    </div>
                                    {
                                        errMessage &&
                                        <div className="login-row" style={{ justifyContent: "flex-start" }}>
                                            <p className='text-danger'>{errMessage}</p>
                                        </div>
                                    }
                                    <div className="login-row">
                                        <button type='submit' disabled={!validForm()}>
                                            login
                                            <ClipLoader size={20} color="white" loading={loading.submit} />
                                            </button>
                                    </div>
                                    <div className="login-row mt-3">
                                        <Link to="/signup">Don't Have an Account? Signin</Link>
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

export default UserLogin
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "./userlogin.css"
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
// import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from "@react-oauth/google";


function UserLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMessage, setErrMessage] = useState("")
    const dispatch = useDispatch()


    const validForm = () => {
        if (password.trim() === "" || email.trim() === "") {
            return false
        }
        return true
    }
    const handleGoogleLogin = async (e) => {
        e.preventDefault()
        let redirectUri = process.env.REACT_APP_SERVER_URL+"/user/auth/google/callback"
        let clientId = "572510792166-vpf7ki1vmt5t7u4er1afdsgn7oe1l1l9.apps.googleusercontent.com"
        try {
            window.open(
                `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`,
                "_self"
            )
        } catch (error) {
            console.log('Google login error:', error);
        }
    };
    const [loading, setLoading] = useState({
        submit: false
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        const { data } = await axios.post("/user/auth/login", { email, password });
        if (data.err) {
            setErrMessage(data.message)
        } else {
            dispatch({ type: "refresh" })
        }
        setLoading({ ...loading, submit: false })
    }
    const demoLogin=async(e)=>{
        e.preventDefault();
        handleSubmit(e);
        setLoading({ ...loading, submit: true })
        let tempEmail="fasilkp314@gmail.com"
        let tempPassword="12"
        const { data } = await axios.post("/user/auth/login", { email:tempEmail, password:tempPassword });
        if (data.err) {
            setErrMessage(data.message)
        } else {
            dispatch({ type: "refresh" })
        }
        setLoading({ ...loading, submit: false })
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
                                    <div className="login-row d-flex justify-content-start">
                                        <Link to="/forgot">Forgot Password</Link>
                                    </div>
                                    <div className="login-row">
                                        <button type='submit' disabled={!validForm()}>
                                            login
                                            <ClipLoader size={20} color="white" loading={loading.submit} />
                                        </button>
                                    </div>
                                    <div className="login-row google-btn">
                                    <Button variant="contained" onClick={demoLogin}>
                                            Demo Login
                                    </Button>
                                        
                                    </div>
                                    <div className="login-row">
                                        OR
                                    </div>
                                    <div className="login-row google-btn">
                                    <Button variant="contained" onClick={handleGoogleLogin}>
                                            <FcGoogle className='icon' />
                                            Login with Google
                                    </Button>
                                        
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
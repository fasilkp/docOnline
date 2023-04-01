
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CircularProgress, TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'
import axios from 'axios';
import VerifyOtp from '../verifyOtp/VerifyOtp';

function UserSignup() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errMessage, setErrMessage] = useState("")
    const [showOtpPage, setShowOtpPage] = useState(false)
    const [loading, setLoading] = useState({
        submit: false
    })
    const validForm = () => {
        if (name.trim() === "" || password.trim() === "" || email.trim() === "" || password !== confirmPassword) {
            return false
        }
        return true
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validForm()) {
            if (!loading.submit) {
                setLoading({ ...loading, submit: true })
                let { data } = await axios.post("/user/auth/register", { email });
                console.log(data)
                if (data.err) {
                    setErrMessage(data.message)
                } else {
                    setShowOtpPage(true)
                }
                setLoading({ ...loading, submit: false })
            }
        }
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
            {
                !showOtpPage ?
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
                                        <form className="login-box" onSubmit={handleSubmit}>
                                            <div className="login-row head">
                                                <h3>Signup</h3>
                                            </div>
                                            <div className="login-row w-100 mt-3">
                                                <TextField id="outlined-basic" label="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" variant="outlined" fullWidth className='input' />
                                            </div>
                                            <div className="login-row w-100">
                                                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" variant="outlined" fullWidth className='input' />
                                            </div>
                                            <div className="login-row">
                                                <TextField id="outlined-basic" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" variant="outlined" className='input' fullWidth />
                                            </div>
                                            <div className="login-row">
                                                <TextField id="outlined-basic" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" variant="outlined" className='input' fullWidth />
                                            </div>
                                            {password !== confirmPassword && <div className="login-row" style={{ justifyContent: "flex-start" }}>
                                                <p className='text-danger text-left                                                                                                                                    '>Password Not Match</p>
                                            </div>}
                                            {
                                                errMessage &&
                                                <div className="login-row" style={{ justifyContent: "flex-start" }}>
                                                    <p className='text-danger'>{errMessage}</p>
                                                </div>
                                            }
                                            <div className="login-row">
                                                <button type='submit' disabled={!validForm()} >
                                                    Sign In
                                                    <ClipLoader size={20} color="white" loading={loading.submit} />
                                                </button>
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
                    :
                    <VerifyOtp data={{name, email, password}} />
            }

        </div>
    )

}

export default UserSignup
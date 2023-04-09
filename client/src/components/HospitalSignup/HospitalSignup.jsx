import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "../UserLogin/userlogin.css"
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

function HospitalSignup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [about, setAbout] = useState("")
    const [address, setAddress] = useState("")
    const [place, setPlace] = useState("")
    const [errMessage, setErrMessage] = useState("")
    const dispatch= useDispatch()
    const [loading, setLoading] = useState({
        submit: false
    })
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        if (validForm()) {
            const { data } = await axios.post("/hospital/auth/register", {
                email, name, password, mobile, about, address, place
            })
            if (data.err) {
                setErrMessage(data.message)
            } else {
                Swal.fire(
                    'Success!',
                    'Thank You for Registration. We will Inform you once account has got Approved',
                    'success'
                  )
                  dispatch({type:"refresh"})
            }
            setLoading({ ...loading, submit: false })


        }
    }
    function validForm() {
        if (name.trim() === "" || about.trim()==="" || place.trim()==="" || address.trim()==="" || email.trim() === "" || password.trim() === "" || mobile.toString().length !== 10) {
            return false
        }
        return true
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
                                <form onSubmit={handleSubmit} className="login-box">
                                    <div className="login-row head">
                                        <h3>register</h3>
                                    </div>
                                    <div className="login-row w-100 mt-3">
                                        <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" type="name" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row w-100">
                                        <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row w-100">
                                        <TextField id="outlined-basic" value={mobile} onChange={(e) => setMobile(e.target.value)} label="Mobile" type="number" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" value={about} onChange={(e) => setAbout(e.target.value)} label="About" type="text" multiline variant="outlined" className='input' fullWidth />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" value={address} onChange={(e) => setAddress(e.target.value)} label="Address" type="text" multiline variant="outlined" className='input' fullWidth />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" value={place} onChange={(e) => setPlace(e.target.value)} label="Place" type="text" variant="outlined" className='input' fullWidth />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" className='input' fullWidth />
                                    </div>
                                    {
                                        errMessage &&
                                        <div className="login-row" style={{ justifyContent: "flex-start" }}>
                                            <p className='text-danger'>{errMessage}</p>
                                        </div>
                                    }
                                    <div className="login-row">
                                        <button type='submit' disabled={!validForm() || loading.submit}>
                                            Signup
                                            <ClipLoader size={20} color="white" loading={loading.submit} />
                                        </button>
                                    </div>
                                    <div className="login-row mt-3">
                                        <Link to="/account/hospital/login">Already Have an Account? Signin</Link>
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

export default HospitalSignup
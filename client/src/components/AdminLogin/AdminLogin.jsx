import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "../UserLogin/userlogin.css"
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function AdminLogin() {
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
    const [loading, setLoading] = useState({
        submit: false
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        const { data } = await axios.post("/admin/auth/login", { email, password });
        if (data.err) {
            setErrMessage(data.message)
        } else {
            dispatch({ type: "refresh" })
        }
        setLoading({ ...loading, submit: false })
    }
    const demoLogin=async(e)=>{
        e.preventDefault();
        setLoading({ ...loading, submit: true })
        let tempEmail="admin@gmail.com"
        let tempPassword="123"
        const { data } = await axios.post("/admin/auth/login", { email:tempEmail, password:tempPassword });
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
                                <form onSubmit={handleSubmit} className="login-box">
                                    <div className="login-row head">
                                        <h3>Login</h3>
                                    </div>
                                    <div className="login-row w-100 mt-3">
                                        <TextField id="outlined-basic" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" type="email" variant="outlined" fullWidth className='input' />
                                    </div>
                                    <div className="login-row">
                                        <TextField id="outlined-basic"  value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" variant="outlined" className='input' fullWidth />
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
                                    <div className="login-row google-btn">
                                    <Button variant="contained" onClick={demoLogin}>
                                            Demo Login
                                    </Button>
                                        
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

export default AdminLogin
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import loginImage from '../../assets/images/login.jpg'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function HospitalSignup() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [loading, setLoading] = useState({
        submit: false
    })
    async function handleSubmit(e){
        e.preventDefault();
        setLoading({...loading, submit:true})
    }
    function validForm(){
        if(name.trim()==="" || email.trim()==="" || password.trim()===""){
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
                                    <TextField id="outlined-basic" value={name} onChange={(e)=>setName(e.target.value)} label="Name" type="name" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row w-100">
                                    <TextField id="outlined-basic" value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" type="email" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row">
                                    <TextField id="outlined-basic" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" variant="outlined" className='input' fullWidth/>
                                </div>
                                <div className="login-row">
                                    <button type='submit' disabled={!validForm() || loading.submit}>
                                        Signup
                                        <ClipLoader size={20} color="white" loading={loading.submit} />
                                        </button>
                                </div>
                                <div className="login-row mt-3">
                                    <Link to="/account/hospital/login">Don't Have an Account? Signin</Link>
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
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import otpImage from '../../assets/images/otp.webp'
import "../UserLogin/userlogin.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

function VerifyOtp(props) {
    const [errMessage, setErrMessage] = useState("")
    const [otp, setOtp] = useState("")

    async function handleSubmit(e){
        e.preventDefault();
            console.log(otp)
            let {data}=await axios.post("/user/auth/register/verify",{otp, ...props.data});
            console.log(data)

    }

    return (

            <Row>
                <div className="login-container">
                    <Row>

                    <Col md={6}>
                        <div className="login-sec bg">
                            <img src={otpImage} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <form className="login-sec sec-2" onSubmit={handleSubmit}>
                            <div className="login-box">
                                <div className="login-row head">
                                    <h3>Verify Email</h3>
                                </div>
                                <div className="login-row head">
                                    <b>Enter the OTP</b>
                                </div>
                                <div className="login-row w-100 mt-3">
                                    <TextField id="outlined-basic" value={otp} onChange={(e)=>setOtp(e.target.value)} label="OTP" type="number" variant="outlined" fullWidth className='input' />
                                </div>
                                <div className="login-row">
                                    <button type='submit' disabled={otp.trim()==""}>Check</button>
                                </div>
                            </div>
                        </form>
                    </Col>
                    </Row>
                </div>
            </Row>
    )
}

export default VerifyOtp
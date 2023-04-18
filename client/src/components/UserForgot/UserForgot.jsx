import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import emailSentImage from "../../assets/images/emailSent.jpg";
import "../UserLogin/userlogin.css";
import { Link } from "react-router-dom";
import UserForgotOtp from "../UserForgotOTP/UserForgotOtp";

function UserForgot() {
    const [email, setEmail] = useState("");
    const [showOTP, setShowOTP] = useState(false)
    const validForm = () => {
        if (email.trim() === "") {
            return false;
        }
        return true;
    };
    return (
        <div className="login-main">
            <Row>
                <nav className="login-nav">
                    <Container>
                        <Row>
                            <h3>docOnline</h3>
                        </Row>
                    </Container>
                </nav>
            </Row>
            {
                showOTP ?
                    <UserForgotOtp email={email} />
                    :
                    <Row>
                        <div className="login-container">
                            <Row>
                                <Col md={6}>
                                    <div className="login-sec bg">
                                        <img src={emailSentImage} alt="" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="login-sec">
                                        <div className="login-box">
                                            <div className="login-row head">
                                                <h3>Forgot Password</h3>
                                            </div>
                                            <div className="login-row head">
                                                <b>Enter the email</b>
                                            </div>
                                            <div className="login-row w-100 mt-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    label="Email"
                                                    type="email"
                                                    variant="outlined"
                                                    fullWidth
                                                    className="input"
                                                />
                                            </div>
                                            <div className="login-row">
                                                <button disabled={!validForm()}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
            }
        </div>
    );
}

export default UserForgot;

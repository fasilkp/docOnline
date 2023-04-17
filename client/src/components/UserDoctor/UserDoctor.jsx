import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import doctorImg from '../../assets/images/doctor.png'
import { Avatar, Rating, setRef } from "@mui/material"
import '../DoctorProfile/doctorProfile.css'
import { useParams } from "react-router-dom"
import axios from "axios"
import BookNow from "../../Modal/BookNow/BookNow"
function UserDoctor() {
    const { id } = useParams()
    const [refresh, setRefresh]=useState(false)
    const [doctorSchedule, setDoctorSchedule] = useState({})
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const [daysAvailable, setDaysAvailable] = useState([])
    const [showBookNow, setShowBookNow] = useState(false)
    const [doctor, setDoctor] = useState({
        image: {
            url: "https://bharajhospital.in/wp-content/uploads/2015/11/doctor-placeholder-500x500.jpg"
        },
        department: {
            name: " "

        },
        hospitalId: {
            name: ""
        }
    })
    useEffect(() => {
        (
            async function () {
                const { data } = await axios.get("/user/doctor/" + id);
                if (!data.err) {
                    setDoctor(data.doctor)
                }
                const { data: scheduleData } = await axios.get("/hospital/doctor/schedule/" + id);
                if (!scheduleData.err) {
                    let n = 0;
                    let date = new Date()
                    let tempDaysAvailable = []
                    while (n < 9) {
                        date = new Date(new Date().setDate(new Date(date).getDate() + 1));
                        let day = new Date(date).getDay();
                        if (scheduleData.schedule[days[day]][0]) {
                            const {data} = await axios.post("/user/check-time", {
                                date,
                                schedule: scheduleData.schedule[days[day]]
                            })
                            console.log(data)
                            if(!data.err){
                                console.log(data.result)
                                tempDaysAvailable.push({
                                    ...data.result
                                })
                            }
                        }
                        n++;
                    }
                    console.log(tempDaysAvailable)
                    setDaysAvailable([...tempDaysAvailable])
                }
            }
        )()
    }, [refresh])


    return (
        <div className="user-main">

            <UserHeader />
            <Container>
                <div className="admin-container">
                    {/* <Container>
                        <h5>Profile</h5>
                    </Container> */}
                    {/* <Container> */}
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="dr-profile-sec sec-1">
                                <div className="dr-profile-img">
                                    <img src={doctor.image.url} alt="" />
                                </div>

                            </div>

                        </Col>
                        <Col sm={12} md={7}>
                            <div className="dr-profile-sec sec-2">
                                <div className="dr-profile-sec-row head">
                                    <h5>{doctor.name}</h5>
                                    <p>{doctor.department.name.toUpperCase()} Department</p>
                                </div>

                                <div className="dr-profile-sec-row">
                                    <h6>Fees</h6>
                                    <b>₹{doctor.fees}</b>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>Qualification</h6>
                                    <b>{doctor.qualification}</b>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>Appointments Available</h6>
                                    <div className="doctor-time-list">
                                        {
                                            daysAvailable.map((item, index) => {
                                                return <div className="time-box" key={index}>
                                                    {new Date(item.date).toLocaleDateString()}
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>
                                <div className="dr-profile-sec-row button">
                                    <button onClick={() => setShowBookNow(true)}>Book Now</button>
                                </div>
                            </div>

                        </Col>
                    </Row>
                    {/* </Container> */}
                    {/* <Container> */}
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="dr-profile-sec sec-1">
                                {/* <div className="dr-profile-sec-row">
                                        <h6>Place</h6>
                                        <p>{doctor.place}</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Address</h6>
                                        <p>{doctor.address}</p>
                                    </div>
                                    <div className="dr-profile-sec-row">
                                        <h6>Mobile</h6>
                                        <p>{doctor.mobile}</p>
                                    </div> */}
                                <div className="dr-profile-sec-row">
                                    <h6>Email</h6>
                                    <p>{doctor.email}</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>Hospital</h6>
                                    <p>{doctor.hospitalId.name}</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <h6>About</h6>
                                    <p>{doctor.about}</p>
                                </div>

                            </div>

                        </Col>
                        <Col sm={12} md={7}>
                            <div className="dr-profile-sec sec-2">
                                <div className="dr-profile-sec-row" style={{ gap: "5px" }}>
                                    <b>Rating and Review</b>
                                    <div className='dr-profile-rating mt-3'>
                                        <b style={{ fontSize: ".8rem" }}>4.5 Rating</b>
                                        <Rating name="read-only" value={4} readOnly size='small' />
                                    </div>

                                    <p style={{ fontSize: ".8rem" }}>total 341 rating and 219 reviews</p>
                                </div>
                                <div className="dr-profile-sec-row">
                                    <div className="dr-profile-reviews">
                                        <div className="dr-profile-review">
                                            <div className="head-sec">
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                                <b>Remi Sharp</b>
                                            </div>
                                            <p className="dr-profile-review-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                            </p>
                                        </div>
                                        <div className="dr-profile-review">
                                            <div className="head-sec">
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                                <b>Remi Sharp</b>
                                            </div>
                                            <p className="dr-profile-review-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                            </p>
                                        </div>
                                        <div className="dr-profile-review">
                                            <div className="head-sec">
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                                <b>Remi Sharp</b>
                                            </div>
                                            <p className="dr-profile-review-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                            </p>
                                        </div>
                                        <div className="dr-profile-review">
                                            <div className="head-sec">
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{ width: 32, height: 32 }}
                                                />
                                                <b>Remi Sharp</b>
                                            </div>
                                            <p className="dr-profile-review-desc">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio velit sed sit nesciunt repudiandae molestias neque veritatis blanditiis
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Col>
                        {
                            showBookNow && 
                            <BookNow daysAvailable={daysAvailable} doctor={doctor} setShowBookNow={setShowBookNow} refresh={refresh} setRefresh={setRefresh} />
                        }

                    </Row>
                    {/* </Container> */}

                </div>
            </Container>
        </div>
    )
}

export default UserDoctor
import { Col, Container, Row } from "react-bootstrap"
import UserHeader from "../UserHeader/UserHeader"
import React, { useEffect, useState } from 'react'
import doctorImg from '../../assets/images/doctor.png'
import { Avatar, Rating, setRef, TextField } from "@mui/material"
import '../DoctorProfile/doctorProfile.css'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import BookNow from "../../Modal/BookNow/BookNow"
import { addDoctorReview, getDoctor } from "../../api/userApi"
import Swal from "sweetalert2"
import UserBottom from "../UserBottom/UserBottom"
function UserDoctor() {
    const { id } = useParams()
    const [refresh, setRefresh] = useState(false)
    const [doctorSchedule, setDoctorSchedule] = useState({})
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")
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
    const navigate= useNavigate()
    const handleSubmitReview = async () => {
        if (rating !== '' && review !== '') {
            const data = await addDoctorReview(rating, review, doctor._id);
            if (!data.err) {
                Swal.fire(
                    'Success!',
                    'Review Added Successfull',
                    'success'
                )
            }
            setRefresh(!refresh)
        }
    }
    useEffect(() => {
        (
            async function () {
                const data = await getDoctor(id)
                if (!data.err) {
                    setDoctor({ ...data.doctor, reviewAccess: data.reviewAccess,  reviews: data.reviews, rating: data.rating })
                    if (data.review) {
                        setReview(data.review.review)
                        setRating(data.review.rating)
                    }
                }
                if (!data.err) {
                    setDoctor({ ...data.doctor, reviewAccess: data.reviewAccess, reviews: data.reviews, rating: data.rating })
                }
                const { data: scheduleData } = await axios.get("/user/doctor/schedule/" + id);
                if (!scheduleData.err) {
                    let n = 0;
                    let date = new Date()
                    let tempDaysAvailable = []
                    while (n < 9) {
                        date = new Date(new Date().setDate(new Date(date).getDate() + 1));
                        let day = new Date(date).getDay();
                        if (scheduleData.schedule[days[day]][0]) {
                            const { data } = await axios.post("/user/check-time", {
                                date,
                                schedule: scheduleData.schedule[days[day]]
                            })
                            if (!data.err) {
                                tempDaysAvailable.push({
                                    ...data.result
                                })
                            }
                        }
                        n++;
                    }
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
                                    {
                                        daysAvailable[0] ?
                                        <div className="doctor-time-list">
                                        {
                                            daysAvailable.map((item, index) => {
                                                return <div className="time-box" key={index}>
                                                    {new Date(item.date).toLocaleDateString()}
                                                </div>
                                            })
                                        }
                                    </div>
                                        :
                                        "No appointments available"

                                    }

                                </div>
                                <div className="dr-profile-sec-row button">
                                    <button onClick={()=>navigate("/chat?id="+doctor._id)}>Chat</button>
                                    <button onClick={() => setShowBookNow(true)} disabled={!daysAvailable[0]} >Book Now</button>
                                </div>
                            </div>

                        </Col>
                    </Row>
                    {/* </Container> */}
                    {/* <Container> */}
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="dr-profile-sec sec-1">
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
                                        <b style={{ fontSize: ".8rem" }}>Rating {doctor.rating} </b>
                                        {
                                            doctor.rating &&
                                            < Rating name="read-only" value={doctor.rating} readOnly size='small'
                                            />
                                        }
                                    </div>

                                    <p style={{ fontSize: ".8rem" }}>total {doctor.reviews && doctor.reviews.length} rating and reviews</p>
                                </div>
                                {
                                    doctor && doctor.reviewAccess &&
                                    <div className="dr-profile-sec-row border p-3" style={{ gap: "5px", fontSize: ".9rem" }}>
                                        <h5>Add Rating</h5>
                                        {/* <div className='dr-profile-rating mt-3'> */}
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Add Review"
                                            multiline
                                            fullwidth
                                            maxRows={4}
                                            minRows={2}
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                            className={'mt-2'}
                                        />
                                        {/* </div> */}
                                        <div className='dr-profile-rating mt-3 justify-content-between'>
                                            <Rating name="read-only" value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                size="large" />
                                            <button className="btn btn-dark"
                                                disabled={rating === "" || review === ""}
                                                onClick={handleSubmitReview}
                                            >Save</button>
                                        </div>


                                    </div>

                                }
                                <div className="dr-profile-sec-row">
                                    <div className="dr-profile-reviews">
                                        {
                                            doctor.reviews &&
                                            doctor.reviews.map((item, index) => {

                                                return <div className="dr-profile-review" key={index}>
                                                    <div className="head-sec">
                                                        <Avatar
                                                            alt={item.userId.name}
                                                            src="/static/images/avatar/1.jpg"
                                                            sx={{ width: 32, height: 32 }}
                                                        />
                                                        <div className="d-flex flex-column">
                                                            <b>{item.userId.name}</b>
                                                            <Rating value={item.rating}
                                                                readOnly
                                                                size="small" />

                                                        </div>
                                                    </div>
                                                    <p className="dr-profile-review-desc">
                                                        {item.review}
                                                    </p>
                                                </div>
                                            })
                                        }

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
            <UserBottom page={''}></UserBottom>

        </div>
    )
}

export default UserDoctor
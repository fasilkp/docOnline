import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserDepartmentRow from '../UserDepartmentRow/UserDepartmentRow'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"
import DoctorList from '../DoctorList/DoctorList'
import { getTop3Doctors, getTop3Hospitals } from '../../api/userApi'
import HospitalList from '../HospitalList/HospitalList'
import UserBottom from '../UserBottom/UserBottom'
import homeChatImg from '../../assets/images/userHomeChat.jpg'

function UserHome() {
  const [departmentList, setDepartmentList] = useState([])
  const [doctorList, setDoctorList] = useState([])
  const [doctorRating, setDoctorRating] = useState({})
  const [hospitalRating, setHospitalRating] = useState({})
  const [hospitalList, setHospitalList] = useState([])

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("/user/departments")
        if (data.departments) {
          setDepartmentList(data.departments)
        }
        const doctorsData = await getTop3Doctors();
        if (!doctorsData.err) {
          setDoctorList(doctorsData.doctors)
          setDoctorRating(doctorsData.rating)
        }
        const hospitalData = await getTop3Hospitals();
        if (!hospitalData.err) {
          setHospitalList(hospitalData.hospitals)
          setHospitalRating(hospitalData.rating)
        }
      }
    )()
  }, [])
  return (
    <>
      <div className="user-main">

        <UserHeader />
        <Row>
          <div className="user-banner ">
            <Container>

              <div className="user-banner-container">
                <h1>We Care About your Health</h1>
                <p>Specialized Doctors from all over the country</p>
                <Link to="/search">
                  <button>
                    Take Appointment
                  </button>
                </Link>
              </div>

            </Container>
          </div>
        </Row>
        <Row>
          <UserDepartmentRow hospitalWise={false} list={departmentList} />
        </Row>
        <Container>
          <Row className="mt-3">
            <Col md={6}>
              <div className="user-home-chat-img">
                <img src={homeChatImg} alt="" />
              </div>
            </Col>
            <Col md={6}>

              <div className="user-home-chat-desc">
                {/* <div className="user-home-chat-desc-container"> */}
                <h4>Chat with a Doctor</h4>
                <p className='text-center'>Chat with your favourite doctor and clarify your doubts</p>
                <Link to={"/chat"}>
                  <button>
                    Got to chats
                  </button>
                </Link>
                {/* </div> */}
              </div>

            </Col>
          </Row>
        </Container>
        <Container>
          <Row className='mt-5'>
            <DoctorList list={doctorList} rating={doctorRating} title="Top Doctors" />
          </Row>
        </Container>
        <Container>
          <Row className='mt-5'>
            <HospitalList list={hospitalList} title={"Top Doctors"} rating={hospitalRating} />
          </Row>
        </Container>
        <UserBottom page={'home'}></UserBottom>
      </div>
      <footer className="text-center text-white" style={{backgroundColor: "#1E6BF3"}}>
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="fasilkpofficial@gmail.com" role="button"><i className="fab fa-google" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/fasilkp" role="button"><i className="fab fa-github" /></a>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a className="text-white" href="https://doconline.netlify.app/">doconline.netlify.app
          </a>
        </div>
      </footer>
    </>

  )
}

export default UserHome
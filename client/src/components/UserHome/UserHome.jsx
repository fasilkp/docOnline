import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserDepartmentRow from '../UserDepartmentRow/UserDepartmentRow'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"
import DoctorList from '../DoctorList/DoctorList'
import { getTop3Doctors, getTop3Hospitals } from '../../api/userApi'
import HospitalList from '../HospitalList/HospitalList'

function UserHome() {
  const [departmentList, setDepartmentList] = useState([])
  const [doctorList, setDoctorList] = useState([])
  const [doctorRating, setDoctorRating]=useState({})
  const [hospitalRating, setHospitalRating]=useState({})
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
        <Row className='mt-5'>
          <DoctorList list={doctorList} rating={doctorRating} title="Top Doctors" />
        </Row>
      </Container>
      <Container>
        <Row className='mt-5'>
          <HospitalList list={hospitalList} rating={hospitalRating} />
        </Row>
      </Container>
    </div>
  )
}

export default UserHome
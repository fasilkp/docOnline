import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserDepartmentRow from '../UserDepartmentRow/UserDepartmentRow'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"
import DoctorList from '../DoctorList/DoctorList'
import { getTop3Doctors } from '../../api/userApi'

function UserHome() {
  const [departmentList, setDepartmentList] = useState([])
  const [doctorList, setDoctorList]= useState([])

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("/user/departments")
        if (data.departments) {
          setDepartmentList(data.departments)
        }
        const doctors = await getTop3Doctors();
        if(!doctors.err){
          setDoctorList(doctors)
        }
      }
    )()
  }, [])
  console.log(doctorList)
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
        <DoctorList list={doctorList} title="Top Doctors" />
      </Row>
        </Container>
    </div>
  )
}

export default UserHome
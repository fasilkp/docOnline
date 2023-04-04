import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import UserDepartmentRow from '../UserDepartmentRow/UserDepartmentRow'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"

function UserHome() {
  const [departmentList, setDepartmentList]=useState([])
  
  useEffect(()=>{
    (
      async function(){
        const {data} = await axios.get("/user/departments")
        setDepartmentList(data)

      }
    )()
  },[])
  return (
    <div className="user-main">

        <UserHeader/>
        <Row>
        <div className="user-banner ">
          <Container fluid>

          <div className="user-banner-container def-padding">
            <h1>We Care About your Health</h1>
            <p>Specialized Doctors from all over the country</p>
            <button>
              Take Appointment
            </button>
          </div>

          </Container>
        </div>
        </Row>
        <Row>
          <UserDepartmentRow list={departmentList} />
        </Row>
    </div>
  )
}

export default UserHome
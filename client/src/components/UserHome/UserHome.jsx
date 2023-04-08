import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserDepartmentRow from '../UserDepartmentRow/UserDepartmentRow'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"

function UserHome() {
  const [departmentList, setDepartmentList]=useState([])
  
  useEffect(()=>{
    (
      async function(){
        const {data} = await axios.get("/user/departments")
        if(data.departments){
          setDepartmentList(data.departments)
        }

      }
    )()
  },[])
  return (
    <div className="user-main">

        <UserHeader/>
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
          <UserDepartmentRow list={departmentList} />
        </Row>
    </div>
  )
}

export default UserHome
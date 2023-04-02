import React from 'react'
import { Container, Row } from 'react-bootstrap'
import UserHeader from '../UserHeader/UserHeader'
import "./UserHome.css"

function UserHome() {
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
    </div>
  )
}

export default UserHome
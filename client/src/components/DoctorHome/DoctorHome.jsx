import React from 'react'
import { Container } from 'react-bootstrap';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSideBar from '../DoctorSidebar/DoctorSidebar';

function DoctorHome() {
  return (
    <div className="admin-home">
      <DoctorHeader />
      <div className="admin-main">
        <DoctorSideBar page={'dashboard'}/>
        <div className="admin-container">
          <Container fluid>

          <h5>Dashboard</h5>
          </Container>

        </div>
      </div>
    </div>
  )
}

export default DoctorHome
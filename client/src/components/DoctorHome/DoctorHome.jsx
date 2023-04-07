import React from 'react'
import { Container } from 'react-bootstrap';
import DoctorBottomNav from '../DoctorBottom/DoctorBottom';
import DoctorHeader from '../DoctorHeader/DoctorHeader';
import DoctorSideBar from '../DoctorSidebar/DoctorSidebar';

function DoctorHome() {
  return (
    <div className="admin-home">
      <DoctorHeader />
      <div className="admin-main">
        <DoctorSideBar page={'home'}/>
        <div className="admin-container">
          <Container fluid>

          <h5>Home</h5>
          </Container>

        </div>
      </div>
      <DoctorBottomNav page={'home'} />
    </div>
  )
}

export default DoctorHome
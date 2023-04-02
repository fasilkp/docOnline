import React from 'react'
import { Container } from 'react-bootstrap';
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';

function HospitalHome() {
  return (
    <div className="admin-home">
      <HospitalHeader />
      <div className="admin-main">
        <HospitalSidebar page={'dashboard'}/>
        <div className="admin-container">
          <Container fluid>

          <h5>Dashboard</h5>
          </Container>

        </div>
      </div>
    </div>
  )
}

export default HospitalHome
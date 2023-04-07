import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import HospitalHeader from '../HospitalHeader/HospitalHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';

function HospitalHome() {
  const [clicked, setCLicked]=useState(false)
  const handleClick=()=>{
    setCLicked(!clicked)
  }

  return (
    <div className="admin-home">
      <HospitalHeader handleClick={handleClick} />
      <div className="admin-main">
        <HospitalSidebar page={'dashboard'} clicked={clicked}/>
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
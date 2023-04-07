import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminHome.css'

function AdminHome() {
  const [clicked, setCLicked]=useState(false)
  const handleClick=()=>{
    setCLicked(!clicked)
  }
  return (
    <div className="admin-home">
      <AdminHeader handleClick={handleClick} />
      <div className="admin-main">
        <AdminSidebar page={'dashboard'} clicked={clicked} />
        <div className="admin-container">
          <Container fluid>

          <h5>Dashboard</h5>
          </Container>

        </div>
      </div>
    </div>
  )
}

export default AdminHome
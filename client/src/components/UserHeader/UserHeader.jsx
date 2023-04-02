import React from 'react'
import { Avatar } from '@mui/material'
import './UserHeader.css'
import { Container, Dropdown } from 'react-bootstrap'

function UserHeader() {

  return (
      
        <Container fluid>
      <div className="user-header def-padding">
        <div className="user-header-item">
            <h5>DocOnline</h5>
        </div>
        <div className="user-header-item">
            <span>Home</span>
            <span>Hospitals</span>
            <span>Departmets</span>
            <span>Doctors</span>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
        </div>

    </div>
    </Container>
  )

}

export default UserHeader
import { Avatar } from '@mui/material'
import React from 'react'
import '../AdminHeader/AdminHeader.css'

function HospitalHeader() {
  return (
    <div className="admin-header">
        <div className="admi-header-item">
            <h5>DocOnline</h5>
        </div>
        <div className="admi-header-item">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
        </div>

    </div>
  )
}

export default HospitalHeader
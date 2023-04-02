import React from 'react'
import { Avatar } from '@mui/material'

function UserHeader() {

  return (
    <div className="user-header">
        <div className="user-header-item">
            <h5>DocOnline</h5>
        </div>
        <div className="user-header-item">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
        </div>

    </div>
  )

}

export default UserHeader
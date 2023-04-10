import { Avatar } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../AdminHeader/AdminHeader.css'

function DoctorHeader() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  async function handleLogout(e) {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure? logout',
      text: "logout from this account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Yes, Accept it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.get("/doctor/auth/logout")
        dispatch({ type: "refresh" })
      }
    })


  }
  return (
    <div className="admin-header">
      <div className="admin-header-item sec-1">
        <h5>DocOnline</h5>
        <p>Doctor Panel</p>

      </div>
      <div className="admin-header-item">
        <div className="profile-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#" onClick={()=>navigate("/account/doctor/profile")}>Profile</Dropdown.Item>
              <Dropdown.Item href="#" onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>

    </div>
  )
}

export default DoctorHeader
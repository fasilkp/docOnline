import { Avatar } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { RiMenu2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import './AdminHeader.css'

function AdminHeader(props) {
  const dispatch = useDispatch()
  async function handleLogout(e) {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure? logout',
      text: "logout from this account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Yes, Logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.get("/admin/auth/logout")
        dispatch({ type: "refresh" })
      }
    })
  }
  return (
    <div className="admin-header">
      <div className='d-flex align-items-center' style={{ gap: "10px" }}>

        <RiMenu2Fill onClick={props.handleClick} className={"sideBtn"} />
        <div className="admin-header-item sec-1" style={{ marginTop: "10px" }}>
          <h5>DocOnline</h5>
          <p>Admin Panel</p>
        </div>
      </div>
      <div className="admi-header-item">
        <div className="profile-dropdown">

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#" onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

    </div>
  )
}

export default AdminHeader
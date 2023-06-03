import React, { useState } from 'react'
import { Avatar, Button, getFormLabelUtilityClasses, Menu, MenuItem } from '@mui/material'
import './UserHeader.css'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AddComplaint from '../../Modal/AddComplaint/AddComplaint'

function UserHeader({fullWidth}) {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.details)
  async function handleLogout() {
    await axios.get("/user/auth/logout");
    dispatch({ type: "refresh" })
  }

  return (
    <div className="header-main">
      <Container fluid={fullWidth ? true : false} >
        <div className="user-header ">
          <div className="user-header-item">
            <Link to="/">
              <h5>DocOnline</h5>
            </Link>
          </div>
          <div className="user-header-item">
            {/* <span>Home</span>
            <span>Hospitals</span>
            <span>Departmets</span>
            <span>Doctors</span> */}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(e) => { setOpen(true); setAnchorEl(e.currentTarget); }}
            >
              <Avatar alt="djhsk sjdhkjs" src={(user && user.picture) ? user.picture.replace('=s96-c', '') : "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"} sx={{ width: 32, height: 32 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setOpen(false)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => navigate("/profile")} >Profile</MenuItem>
              <MenuItem onClick={() => { setShowModal(true) }} >Register compliant</MenuItem>
              <MenuItem onClick={handleLogout} >Logout</MenuItem>
            </Menu>
          </div>

        </div>
      </Container>
      {
        showModal &&
        <AddComplaint setShowModal={setShowModal} />
      }
    </div>

  )

}

export default UserHeader
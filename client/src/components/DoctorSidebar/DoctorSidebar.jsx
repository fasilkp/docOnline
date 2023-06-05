import React from 'react'
import '../AdminSidebar/Sidebar.css'
import { RiArchiveDrawerLine, RiBuilding4Line, RiFileList3Fill, RiFileList3Line, RiHome2Line, RiHospitalLine, RiUser2Line, RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {BsChatLeftText} from "react-icons/bs"

function DoctorSidebar({ page }) {
  return (
    <div className="admin-sidebar doctor">
      <ul>
        <Link to="/account/doctor/">
          <li className={`admin-sideitems ${page == "home" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiHome2Line className='icon' />
              <span>Home</span>
            </div>
          </li>
        </Link>
        <Link to="/account/doctor/schedule">

          <li className={`admin-sideitems ${page == "schedule" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiArchiveDrawerLine className="icon" />
              <span>Schedules</span>
            </div>
          </li>
        </Link>
        <Link to="/account/doctor/booking">

          <li className={`admin-sideitems ${page == "booking" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiFileList3Line className='icon' />
              <span>All Booking</span>
            </div>
          </li>
        </Link>
        <Link to="/account/doctor/profile">

            <li className={`admin-sideitems ${page=="profile" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiUserLine className='icon' />
                <span>Profile</span>
              </div>
            </li>
            </Link>
      <Link to="/account/doctor/chat">

            <li className={`admin-sideitems ${page=="chat" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <BsChatLeftText className='icon' />
                <span>Chats</span>
              </div>
            </li>
            </Link>


      </ul>

    </div>
  )
}

export default DoctorSidebar
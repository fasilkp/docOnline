import React from 'react'
import '../AdminSidebar/Sidebar.css'
import { RiArchiveDrawerLine, RiBuilding4Line, RiHome2Line, RiHospitalLine, RiUser2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

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
        <Link to="/account/doctor/patient">

          <li className={`admin-sideitems ${page == "patient" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiUser2Line className='icon' />
              <span>Patients</span>
            </div>
          </li>
        </Link>
        <Link to="/account/doctor/profile">

            <li className={`admin-sideitems ${page=="profile" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiBuilding4Line className='icon' />
                <span>Profile</span>
              </div>
            </li>
            </Link>
        {/* <Link to="/account/admin/hospitals/requests">

            <li className={`admin-sideitems ${page=="hospital request" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiHospitalLine className='icon' />
                <span>Hospital Requests</span>
              </div>
            </li>
            </Link> */}

      </ul>

    </div>
  )
}

export default DoctorSidebar
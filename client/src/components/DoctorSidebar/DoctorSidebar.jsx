import React from 'react'
import '../AdminSidebar/Sidebar.css'
import { RiArchiveDrawerLine, RiBuilding4Line, RiHome2Line, RiHospitalLine, RiUser2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function DoctorSidebar({ page }) {
  return (
    <div className="admin-sidebar">
      <ul>
        <Link to="/account/doctor/">
          <li className={`admin-sideitems ${page == "dashboard" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiHome2Line className='icon' />
              <span>Dashboard</span>
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
        {/* <Link to="/account/admin/hospitals">

            <li className={`admin-sideitems ${page=="doctor request" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiBuilding4Line className='icon' />
                <span>Doctor Requests</span>
              </div>
            </li>
            </Link> */}
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
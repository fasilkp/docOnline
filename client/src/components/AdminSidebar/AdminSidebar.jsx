import React from 'react'
import './Sidebar.css'
import { RiArchiveDrawerLine, RiBuilding4Line, RiFileWarningLine, RiHome2Line, RiHospitalLine, RiUser2Line, RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function AdminSidebar({page}) {
  return (
    <div className="admin-sidebar">
          <ul>
              <Link to="/account/admin/">
            <li className={`admin-sideitems ${page=="dashboard" && 'active'}`}>
              <div className='side'></div>
              <div className="admin-sideItem">

                <RiHome2Line className='icon' />
                <span>Dashboard</span>
              </div>
            </li>
              </Link>
              <Link to="/account/admin/doctors">

            <li className={`admin-sideitems ${page=="doctor" && 'active'}`}>
              <div className='side'></div>
              <div className="admin-sideItem">

                <RiUser2Line className='icon' />
                <span>Doctors</span>
              </div>
            </li>
            </Link>
            
            <Link to="/account/admin/hospitals">

            <li className={`admin-sideitems ${page=="hospital" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiBuilding4Line className='icon' />
                <span>Hospitals</span>
              </div>
            </li>
            </Link>
            <Link to="/account/admin/hospitals/requests">

            <li className={`admin-sideitems ${page=="hospital request" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiHospitalLine className='icon' />
                <span>Hospital Requests</span>
              </div>
            </li>
            </Link>
            <Link to="/account/admin/users">

            <li className={`admin-sideitems ${page=="user" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiUserLine className='icon' />
                <span>Users</span>
              </div>
            </li>
            </Link>
            <Link to="/account/admin/hospitals/requests">

            <li className={`admin-sideitems ${page=="complain" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiFileWarningLine className='icon' />
                <span>Complaints</span>
              </div>
            </li>
            </Link>

          </ul>

        </div>
  )
}

export default AdminSidebar
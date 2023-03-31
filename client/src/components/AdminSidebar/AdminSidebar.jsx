import React from 'react'
import './Sidebar.css'
import { RiBuilding4Line, RiHome2Line, RiHospitalLine, RiUser2Line } from "react-icons/ri";

function AdminSidebar({page}) {
  return (
    <div className="admin-sidebar">
          <ul>
            <li className={`admin-sideitems ${page=="dashboard" && 'active'}`}>
              <div className='side'></div>
              <div className="admin-sideItem">

                <RiHome2Line className='icon' />
                <span>Dashboard</span>
              </div>
            </li>
            <li className={`admin-sideitems ${page=="doctor" && 'active'}`}>
              <div className='side'></div>
              <div className="admin-sideItem">

                <RiUser2Line className='icon' />
                <span>Doctors</span>
              </div>
            </li>
            <li className={`admin-sideitems ${page=="hospital" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiBuilding4Line className='icon' />
                <span>Hospitals</span>
              </div>
            </li>
            <li className={`admin-sideitems ${page=="hospital request" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiHospitalLine className='icon' />
                <span>Hospital Requests</span>
              </div>
            </li>

          </ul>

        </div>
  )
}

export default AdminSidebar
import React from 'react'
import '../AdminSidebar/Sidebar.css'
import { RiArchiveDrawerLine, RiBarChart2Line, RiBook2Line, RiBuilding4Line, RiFileWarningLine, RiHome2Line, RiHospitalLine, RiUser2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function HospitalSidebar({ page, clicked }) {
  return (
    <div className={`admin-sidebar ${clicked && 'open'}`}>
      <ul>
        <Link to="/account/hospital/">
          <li className={`admin-sideitems ${page == "dashboard" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiHome2Line className='icon' />
              <span>Dashboard</span>
            </div>
          </li>
        </Link>
        <Link to="/account/hospital/doctor">

          <li className={`admin-sideitems ${page == "doctor" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiUser2Line className='icon' />
              <span>Doctors</span>
            </div>
          </li>
        </Link>
        <Link to="/account/hospital/booking">

          <li className={`admin-sideitems ${page == "booking" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiBook2Line className='icon' />
              <span>
                Booking</span>
            </div>
          </li>
        </Link>
        <Link to="/account/hospital/department">

          <li className={`admin-sideitems ${page == "department" && 'active'}`}>
            <div className='side'></div>
            <div className="admin-sideItem">

              <RiArchiveDrawerLine className="icon" />
              <span>Department</span>
            </div>
          </li>
        </Link>
        {/* <Link to="/account/hospital/complaint">

            <li className={`admin-sideitems ${page=="complaint" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiFileWarningLine className='icon' />
                <span>Complaints</span>
              </div>
            </li>
            </Link> */}
        <Link to="/account/hospital/reports">

            <li className={`admin-sideitems ${page=="report" && 'active'}`}>

              <div className='side'></div>
              <div className="admin-sideItem">

                <RiBarChart2Line className='icon' />
                <span>Reports</span>
              </div>
            </li>
            </Link>


      </ul>

    </div>
  )
}

export default HospitalSidebar
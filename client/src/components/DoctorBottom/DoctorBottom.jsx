import React from 'react'
import { RiArchiveDrawerLine, RiFileList3Fill, RiFileList3Line, RiFileListFill, RiHome2Fill, RiUser3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../../assets/css/bottomNav.css'
function DoctorBottomNav({page}) {
    
  return (
    <div className="bottom-nav position-fixed fixed-bottom">
        <div className="bottom-nav-container">
            <div className={`bottom-nav-item ${page==='home' && 'active'}`}>
                <Link to="/account/doctor">
                <RiHome2Fill className='icon'/>
                <span>Home</span>
                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='booking' && 'active'}`}>
                <Link to="/account/doctor/booking">
                <RiFileList3Fill className='icon'/>
                <span>All Booking</span>
                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='schedule' && 'active'}`}>
                <Link to="/account/doctor/schedule">
                <RiFileListFill className='icon'/>
                <span>Schedule</span>

                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='profile' && 'active'}`}>
                <Link to="/account/doctor/profile">
                <RiUser3Fill className='icon' />
                <span>Profile</span>

                </Link>
            </div>

        </div>
    </div>
  )
}

export default DoctorBottomNav
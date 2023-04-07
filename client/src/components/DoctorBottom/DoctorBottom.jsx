import React from 'react'
import { RiHome2Fill, RiUser3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../../assets/css/bottomNav.css'
function DoctorBottomNav({page}) {
    
  return (
    <div className="bottom-nav position-fixed fixed-bottom">
        <div className="bottom-nav-container">
            <div className={`bottom-nav-item ${page==='home' && 'active'}`}>
                <Link to="/account/doctor">
                <RiHome2Fill className='icon'/>
                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='home' && 'active'}`}>
                <Link to="/account/doctor">
                <RiHome2Fill className='icon'/>
                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='home' && 'active'}`}>
                <Link to="/account/doctor">
                <RiHome2Fill className='icon'/>
                </Link>
            </div>
            <div className={`bottom-nav-item ${page==='profile' && 'active'}`}>
                <Link to="/account/doctor/profile">
                <RiUser3Fill className='icon' />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default DoctorBottomNav
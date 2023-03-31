import React from 'react'
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminHome.css'

function AdminHome() {
  return (
    <div className="admin-home">
      <AdminHeader />
      <div className="admin-main">
        <AdminSidebar page={'dashboard'}/>
        <div className="admin-container">

        </div>
      </div>
    </div>
  )
}

export default AdminHome
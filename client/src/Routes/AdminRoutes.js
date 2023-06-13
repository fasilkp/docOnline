import React, { useEffect } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AdminHomePage from '../pages/admin/AdminHomePage';
import HospitalrequestPage from '../pages/admin/HospitalrequestPage';
import AdminDoctorsPage from '../pages/admin/AdminDoctorsPage';
import AdminRefundPage from '../pages/admin/AdminRefundPage';
import AdminHospitalPage from '../pages/admin/AdminHospitalPage';
import AdminUsersPage from '../pages/admin/AdminUsersPage';
import AdminReportPage from '../pages/admin/AdminReportPage';
import AdminComplaintPage from '../pages/admin/AdminComplaintPage';
import AdminWithdrawalsPage from '../pages/admin/AdminWithdrawalsPage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import ProtectedAdminRoutes from '../utils/ProtectedAdminRoutes';
export default function AdminRoutes() {
    console.log("hai")
    const { refresh, admin} = useSelector((state) =>state);
      const dispatch = useDispatch()
    
      useEffect(() => {
        (async function () {
          let { data: adminData } = await axios.get("/admin/auth/check");
          dispatch({ type: "admin", payload: { login: adminData.loggedIn, details: adminData.admin } })
        })()
      }, [refresh])

  return (
    <Routes>

        <Route element={<ProtectedAdminRoutes admin={admin} />}>
        <>
            <Route path='/' element={<AdminHomePage />} />
            <Route path='/hospitals/requests' element={<HospitalrequestPage />} />
            <Route path='/doctors' element={<AdminDoctorsPage />} />
            <Route path='/refunds' element={<AdminRefundPage />} />
            <Route path='/hospitals' element={<AdminHospitalPage />} />
            <Route path='/users' element={<AdminUsersPage />} />
            <Route path='/reports' element={<AdminReportPage />} />
            <Route path='/complaints' element={<AdminComplaintPage />} />
            <Route path='/withdrawals' element={<AdminWithdrawalsPage />} />
            <Route path='/*' element={<NotFoundPage />} />
        </>
        </Route>
        {
          admin.login &&
          <Route path='/login' element={<Navigate to="/account/admin" />} />
        }
        {
          admin.login === false &&
          <>
            <Route path='/login' element={<AdminLoginPage />} />
          </>
        }
    </Routes>
  )
}

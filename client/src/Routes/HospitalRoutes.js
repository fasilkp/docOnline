import React, { useEffect } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import HospitalApproalPage from '../pages/hospital/HospitalApproalPage';
import HospitalHomePage from '../pages/hospital/HospitalHomePage';
import HospitalProfilePage from '../pages/hospital/HospitalProfilePage';
import HospitalDepartmentPage from '../pages/hospital/HospitalDepartmentPage';
import HospitalDoctorPage from '../pages/hospital/HospitalDoctorPage';
import HospitalSchedulePage from '../pages/hospital/HospitalSchedulePage';
import HospitalBookingPage from '../pages/hospital/HospitalBookingPage';
import HospitalReportPage from '../pages/hospital/HospitalReportPage';
import NotFoundPage from '../pages/NotFoundPage';
import HospitalLoginPage from '../pages/hospital/HospitalLoginPage';
import HospitalSignupPage from '../pages/hospital/HospitalSignupPage';
import HospitalForgotPage from '../pages/hospital/HospitalForgotPage';
import ProtectedHospitalRoutes from '../utils/ProtectedHospitalRoutes';

export default function HospitalRoutes() {
    const { refresh, hospital } = useSelector((state) => state);
      const dispatch = useDispatch()
    
      useEffect(() => {
        (async function () {
          let { data: hospitalData } = await axios.get("/hospital/auth/check");
          dispatch({ type: "hospital", payload: { login: hospitalData.loggedIn, details: hospitalData.hospital } })
        })()
      }, [refresh])

  return (
    <Routes>
        {
          hospital.login && hospital.details.rejected &&
          <>
            <Route path='/' element={<HospitalApproalPage rejected hospital={hospital.details} rejectedMessage={hospital.details.rejectedMessage} />} />
            <Route path='/*' element={<HospitalApproalPage rejected hospital={hospital.details} rejectedMessage={hospital.details.rejectedMessage} />} />
          </>
        }
        
        {
          hospital.login && hospital.details.active === false &&
          <>
            <Route path='/' element={<HospitalApproalPage rejected={false} />} />
            <Route path='/*' element={<HospitalApproalPage rejected={false} />} />
          </>
        }

        <Route element={<ProtectedHospitalRoutes hospital={hospital} />}>
        <>
            <Route path='/' element={<HospitalHomePage />} />
            <Route path='/profile' element={<HospitalProfilePage />} />
            <Route path='/department' element={<HospitalDepartmentPage />} />
            <Route path='/doctor' element={<HospitalDoctorPage />} />
            <Route path='/schedule/:id' element={<HospitalSchedulePage />} />
            <Route path='/booking' element={<HospitalBookingPage />} />
            <Route path='/reports' element={<HospitalReportPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </>
        </Route>
        {
          hospital.login &&
          <>
            <Route path='/login' element={<Navigate to="/account/hospital/" />} />
            <Route path='/signup' element={<Navigate to="/account/hospital/" />} />
            <Route path='/forgot' element={<Navigate to="/account/hospital/" />} />
          </>
        }
        {
          hospital.login === false &&
          <>
            <Route path='/login' element={<HospitalLoginPage />} />
            <Route path='/signup' element={<HospitalSignupPage />} />
            <Route path='/forgot' element={<HospitalForgotPage />} />
          </>
        }
    </Routes>
  )
}

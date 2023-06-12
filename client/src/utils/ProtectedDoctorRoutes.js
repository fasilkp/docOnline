import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedDoctorRoutes({doctor}) {
  return (
    <>
        {
            doctor.login===false && <Navigate to="/account/doctor/login"/>
        }
        {
            doctor.login && <Outlet/>
        }
    </>
  )
}

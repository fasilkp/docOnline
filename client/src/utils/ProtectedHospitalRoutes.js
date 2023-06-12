import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedHospitalRoutes({hospital}) {
  return (
    <>
        {
            hospital.login===false && <Navigate to="/account/hospital/login"/>
        }
        {
            hospital.login && <Outlet/>
        }
    </>
  )
}

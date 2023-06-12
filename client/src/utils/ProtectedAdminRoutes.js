import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedAdminRoutes({admin}) {
  return (
    <>
        {
            admin.login===false && <Navigate to="/account/admin/login"/>
        }
        {
            admin.login && <Outlet/>
        }
    </>
  )
}

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedUserRoutes({user}) {
  return (
    <>
        {
            user.login===false && <Navigate to="/login"/>
        }
        {
            user.login && <Outlet/>
        }
    </>
  )
}

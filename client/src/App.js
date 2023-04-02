import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/user/UserLoginPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLoginPage from './pages/admin/AdminLoginPage';
import HospitalLoginPage from './pages/hospital/HospitalLoginPage';
import UserForgotPage from './pages/user/UserForgotPage';
import HospitalForgotPage from './pages/hospital/HospitalForgotPage';
import DoctorForgotPage from './pages/doctor/DoctorForgotPage';
import DoctorLoginPage from './pages/doctor/DoctorLoginPage';
import UserSignupPage from './pages/user/UserSignupPage';
import VerifyOtp from './components/verifyOtp/VerifyOtp';
import AdminHome from './components/AdminHome/AdminHome';
import axios from 'axios'
import AdminHomePage from './pages/admin/AdminHomePage';
import { useDispatch, useSelector } from 'react-redux';
import UserHomePage from './pages/user/UserHomePage';
import './App.css'
import HospitalrequestPage from './pages/admin/HospitalrequestPage';
import HospitalHomePage from './pages/hospital/HospitalHomePage';
import HospitalSignupPage from './pages/hospital/HospitalSignupPage';


function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;

  const { user, refresh, admin, hospital } = useSelector((state) => {
    return state;
  });
  console.log(hospital)
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })
      let { data: adminData } = await axios.get("/admin/auth/check");
      dispatch({ type: "admin", payload: { login: adminData.loggedIn, details: adminData.admin } })
      let { data: hospitalData } = await axios.get("/hospital/auth/check");
      console.log(hospitalData)
      dispatch({ type: "hospital", payload: { login: hospitalData.loggedIn, details: hospitalData.hospital } })
    })()
  }, [refresh])
  return (
    <div className='App'>
      <Routes>
        {
          user.login &&
          <>
            <Route path='/' element={<UserHomePage />} />
            <Route path='/login' element={<Navigate to={"/"} />} />
            <Route path='/signup' element={<Navigate to="/" />} />
          </>
        }
        {
          user.login === false &&
          <>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<UserSignupPage />} />
          </>
        }
        {
          admin.login &&
          <>
            <Route path='/account/admin/' element={<AdminHomePage />} />
            <Route path='/account/admin/hospitals/requests' element={<HospitalrequestPage />} />
            <Route path='/account/admin/login' element={<Navigate to="/account/admin" />} />
          </>
        }
        {
          admin.login === false &&
          <>
            <Route path='/account/admin/login' element={<AdminLoginPage />} />
            <Route path='/account/admin/*' element={<Navigate to="/account/admin/login" />} />
          </>
        }
        {
          hospital.login &&
          <>
            <Route path='/account/hospital/' element={<HospitalHomePage />} />
            <Route path='/account/hospital/login' element={<Navigate to="/account/hospital/" />} />
            <Route path='/account/hospital/signup' element={<Navigate to="/account/hospital/" />} />
          </>
        }
        {
          hospital.login === false &&
          <>
            <Route path='/account/hospital/login' element={<HospitalLoginPage />} />
            <Route path='/account/hospital/signup' element={<HospitalSignupPage />} />
            <Route path='/account/hospital/*' element={<Navigate to="/account/hospital/login" />} />
          </>
        }



        

        <Route path='/account/doctor/login' element={<DoctorLoginPage />} />
        <Route path='/account/doctor/forgot' element={<DoctorForgotPage />} />
        <Route path='/account/admin' element={<AdminHome />} />

      </Routes>

    </div>

  )
}

export default App
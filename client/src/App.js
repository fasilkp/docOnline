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
import HospitalrequestPage from './pages/hospital/HospitalrequestPage';


function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;

  const { user, refresh, admin } = useSelector((state) => {
    return state;
  });
  const dispatch=useDispatch()

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })
      let { data:adminData } = await axios.get("/admin/auth/check");
      console.log(adminData)
      dispatch({ type: "admin", payload: { login: adminData.loggedIn, details: adminData.user } })
      console.log(admin)

    })()
  }, [refresh])
  return (
    <div className='App'>
      <Routes>
        {
          user.login &&
          <>
          <Route path='/' element={<UserHomePage/>} />
          <Route path='/login' element={<Navigate to={"/"} />} />
          <Route path='/signup' element={<Navigate to="/" />} />
          </>
        }
        {
          user.login===false &&
          <>
          <Route path='/' element={<Navigate to="/login"/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<UserSignupPage />} />
          </>
        }
        {
          admin.login &&
          <>
          <Route path='/account/admin/' element={<AdminHomePage />} />
          <Route path='/account/admin/hospital/requests' element={<HospitalrequestPage />} />
          <Route path='/account/admin/login' element={<Navigate to="/account/admin" />} />
          </>
        }
        {
          admin.login===false &&
          <>
          <Route path='/account/admin/login' element={<AdminLoginPage />} />
          <Route path='/account/admin/*' element={<Navigate to="/account/admin/login" />} />
          </>
        }



        <Route path='/account/hospital/login' element={<HospitalLoginPage />} />
        <Route path='/account/hospital/forgot' element={<HospitalForgotPage />} />

        <Route path='/account/doctor/login' element={<DoctorLoginPage />} />
        <Route path='/account/doctor/forgot' element={<DoctorForgotPage />} />
        <Route path='/account/admin' element={<AdminHome />} />

      </Routes>

    </div>

  )
}

export default App
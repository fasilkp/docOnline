import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
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
import { useDispatch, useSelector } from 'react-redux';


function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;

  const { user, refresh } = useSelector((state) => {
    return state;
  });
  const dispatch=useDispatch()

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })
    })()
  }, [refresh])
  return (
    <div className='App'>
      <Routes>
        {
          user.login &&
          <>
          <Route path='/' element={<h1>hai</h1>} />
          <Route path='/login' element={<Navigate to={"/"} />} />
          <Route path='/signup' element={<Navigate to="/" />} />
          {/* <Route path='/forgot' element={<Navigate to="/" />} />
          <Route path='/otp' element={<VerifyOtp />} /> */}
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


        <Route path='/admin/login' element={<AdminLoginPage />} />

        <Route path='/hospital/login' element={<HospitalLoginPage />} />
        <Route path='/hospital/forgot' element={<HospitalForgotPage />} />

        <Route path='/doctor/login' element={<DoctorLoginPage />} />
        <Route path='/doctor/forgot' element={<DoctorForgotPage />} />
        <Route path='/admin' element={<AdminHome />} />

      </Routes>

    </div>

  )
}

export default App
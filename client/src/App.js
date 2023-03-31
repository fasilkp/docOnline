import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/user/UserLoginPage'
import {Routes, Route} from 'react-router-dom'
import AdminLoginPage from './pages/admin/AdminLoginPage';
import HospitalLoginPage from './pages/hospital/HospitalLoginPage';
import UserForgotPage from './pages/user/UserForgotPage';
import HospitalForgotPage from './pages/hospital/HospitalForgotPage';
import DoctorForgotPage from './pages/doctor/DoctorForgotPage';
import DoctorLoginPage from './pages/doctor/DoctorLoginPage';
import UserSignupPage from './pages/user/UserSignupPage';
import VerifyOtp from './components/verifyOtp/VerifyOtp';
import AdminHome from './components/AdminHome/AdminHome';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>hai</h1> } />
        <Route path='/login' element={<LoginPage /> } />
        <Route path='/signup' element={<UserSignupPage /> } />
        <Route path='/forgot' element={<UserForgotPage /> } />
        <Route path='/otp' element={<VerifyOtp /> } />


        <Route path='/admin/login' element={<AdminLoginPage /> } />

        <Route path='/hospital/login' element={<HospitalLoginPage /> } />
        <Route path='/hospital/forgot' element={<HospitalForgotPage /> } />

        <Route path='/doctor/login' element={<DoctorLoginPage /> } />
        <Route path='/doctor/forgot' element={<DoctorForgotPage /> } />
        <Route path='/admin' element={<AdminHome /> } />
        
      </Routes>
       
    </div>

  )
}

export default App
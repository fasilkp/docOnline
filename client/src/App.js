import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/user/UserLoginPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLoginPage from './pages/admin/AdminLoginPage';
import HospitalLoginPage from './pages/hospital/HospitalLoginPage';
import DoctorLoginPage from './pages/doctor/DoctorLoginPage';
import UserSignupPage from './pages/user/UserSignupPage';
import axios from 'axios'
import AdminHomePage from './pages/admin/AdminHomePage';
import { useDispatch, useSelector } from 'react-redux';
import UserHomePage from './pages/user/UserHomePage';
import './App.css'
import HospitalrequestPage from './pages/admin/HospitalrequestPage';
import HospitalHomePage from './pages/hospital/HospitalHomePage';
import HospitalSignupPage from './pages/hospital/HospitalSignupPage';
import HospitalDepartmentPage from './pages/hospital/HospitalDepartmentPage';
import HospitalDoctorPage from './pages/hospital/HospitalDoctorPage';
import DoctorHomePage from './pages/doctor/DoctorHomePage';
import AdminDoctorsPage from './pages/admin/AdminDoctorsPage';
import AdminHospitalPage from './pages/admin/AdminHospitalPage';
import DoctorProfilePage from './pages/doctor/DoctorProfilePage';
import UserSearchPage from './pages/user/UserSearchPage';


function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;

  const { user, refresh, admin, hospital, doctor } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })
      let { data: adminData } = await axios.get("/admin/auth/check");
      dispatch({ type: "admin", payload: { login: adminData.loggedIn, details: adminData.admin } })
      let { data: hospitalData } = await axios.get("/hospital/auth/check");
      dispatch({ type: "hospital", payload: { login: hospitalData.loggedIn, details: hospitalData.hospital } })
      let { data: doctorData } = await axios.get("/doctor/auth/check");
      dispatch({ type: "doctor", payload: { login: doctorData.loggedIn, details: doctorData.doctor } })
    })()
  }, [refresh])
  return (
    <div className='App'>
      <Routes>
        {
          user.login &&
          <>
            <Route path='/login' element={<Navigate to={"/"} />} />
            <Route path='/signup' element={<Navigate to="/" />} />
            <Route path='/' element={<UserHomePage />} />
            <Route path='/search' element={<UserSearchPage />} />
          </>
        }
        {
          user.login === false &&
          <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<UserSignupPage />} />
            <Route path='/' element={<Navigate to="/login" />} />
          </>
        }
        {
          admin.login &&
          <>
            <Route path='/account/admin/' element={<AdminHomePage />} />
            <Route path='/account/admin/login' element={<Navigate to="/account/admin" />} />
            <Route path='/account/admin/hospitals/requests' element={<HospitalrequestPage />} />
            <Route path='/account/admin/doctors' element={<AdminDoctorsPage />} />
            <Route path='/account/admin/hospitals' element={<AdminHospitalPage />} />
          </>
        }
        {
          admin.login === false &&
          <>

            <Route path='/account/admin/login' element={<AdminLoginPage />} />
            <Route path='/account/admin' element={<Navigate to="/account/admin/login" />} />
            <Route path='/account/admin/*' element={<Navigate to="/account/admin/login" />} />
          </>
        }
        {
          hospital.login &&
          <>
            <Route path='/account/hospital/' element={<HospitalHomePage />} />
            <Route path='/account/hospital/department' element={<HospitalDepartmentPage />} />
            <Route path='/account/hospital/doctor' element={<HospitalDoctorPage />} />
            <Route path='/account/hospital/login' element={<Navigate to="/account/hospital/" />} />
            <Route path='/account/hospital/signup' element={<Navigate to="/account/hospital/" />} />
          </>
        }
        {
          hospital.login === false &&
          <>
            <Route path='/account/hospital/login' element={<HospitalLoginPage />} />
            <Route path='/account/hospital/signup' element={<HospitalSignupPage />} />
            <Route path='/account/hospital' element={<Navigate to="/account/hospital/login" />} />
            <Route path='/account/hospital/*' element={<Navigate to="/account/hospital/login" />} />
          </>
        }
        {
          doctor.login === false &&
          <>
            <Route path='/account/doctor/login' element={<DoctorLoginPage />} />
            <Route path='/account/doctor' element={<Navigate to="/account/doctor/login" />} />
            <Route path='/account/doctor/*' element={<Navigate to="/account/doctor/login" />} />
          </>
        }
        {
          doctor.login &&
          <>
            <Route path='/account/doctor/login' element={<Navigate to="/account/doctor/" />} />
            <Route path='/account/doctor/' element={<DoctorHomePage />} />
            <Route path='/account/doctor/profile' element={<DoctorProfilePage />} />
          </>
        }





      </Routes>

    </div>

  )
}

export default App
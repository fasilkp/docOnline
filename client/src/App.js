import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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
import UserDoctorPage from './pages/user/UserDoctorPage';
import UserHospitalPage from './pages/user/UserHospitalPage';
import UserDepartmentPage from './pages/user/UserDepartmentPage';
import HospitalApproalPage from './pages/hospital/HospitalApproalPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import HospitalProfilePage from './pages/hospital/HospitalProfilePage';
import HospitalSchedulePage from './pages/hospital/HospitalSchedulePage';
import HospitalBookingPage from './pages/hospital/HospitalBookingPage';
import DoctorSchedulePage from './pages/doctor/DoctorSchedulePage';
import UserForgotPage from './pages/user/UserForgotPage';
import HospitalForgotPage from './pages/hospital/HospitalForgotPage';
import DoctorForgotPage from './pages/doctor/DoctorForgotPage';
import DoctorBookingPage from './pages/doctor/DoctorBookingPage';
import HospitalReportPage from './pages/hospital/HospitalReportPage';
import AdminReportPage from './pages/admin/AdminReportPage';
import AdminRefundPage from './pages/admin/AdminRefundPage';
import UserProfilePage from './pages/user/UserProfilePage';
import AdminComplaintPage from './pages/admin/AdminComplaintPage';
import AdminWithdrawalsPage from './pages/admin/AdminWithdrawalsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css'
import Chat from './components/Chat/Chat';
import UserAuthCallbackPage from './pages/user/UserAuthCallbackPage';
import DoctorChat from './components/DoctorChat/DoctorChat';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import HospitalRoutes from './Routes/HospitalRoutes';


function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =process.env.REACT_APP_SERVER_URL ;
  // axios.defaults.baseURL = "https://doconlineapi.cartgenie.store/";


  const { user, refresh, admin, hospital, doctor } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/user/auth/check");
      dispatch({ type: "user", payload: { login: data.loggedIn, details: data.user } })
      console.log(data)
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
        <Route path='/account/admin/*' element={<AdminRoutes/>}/>
        <Route path='/account/hospital/*' element={<HospitalRoutes/>}/>
        
       

        
        <Route path='/*' element={<UserRoutes/>}></Route>
      </Routes>

    </div>

  )
}

export default App
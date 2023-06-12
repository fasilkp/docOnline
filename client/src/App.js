import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import HospitalRoutes from './Routes/HospitalRoutes';
import DoctorRoutes from './Routes/DoctorRoutes';


function App() {
  
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL =process.env.REACT_APP_SERVER_URL ;

  return (
    <div className='App'>
      <Routes>
        <Route path='/account/admin/*' element={<AdminRoutes/>}/>
        <Route path='/account/hospital/*' element={<HospitalRoutes/>}/>
        <Route path='/account/doctor/*' element={<DoctorRoutes/>}/>
        <Route path='/*' element={<UserRoutes/>}></Route>
      </Routes>

    </div>

  )
}

export default App
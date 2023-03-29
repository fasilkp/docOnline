import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/user/UserLoginPage'
import {Routes, Route} from 'react-router-dom'
import AdminLoginPage from './pages/user/AdminLoginPage';
import HospitalLoginPage from './pages/user/HospitalLoginPage';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>hai</h1> } />
        <Route path='/login' element={<LoginPage /> } />


        <Route path='/admin/login' element={<AdminLoginPage /> } />
        <Route path='/hospital/login' element={<HospitalLoginPage /> } />

      </Routes>
       
    </div>

  )
}

export default App
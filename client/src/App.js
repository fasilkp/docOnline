import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/user/UserLoginPage'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>hai</h1> } />
        <Route path='/login' element={<LoginPage /> } />
        

        <Route path='/admin/login' element={<LoginPage /> } />

      </Routes>
       
    </div>

  )
}

export default App
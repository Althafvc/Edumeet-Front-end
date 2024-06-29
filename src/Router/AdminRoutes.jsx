import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminHome from '../Pages/Admin/AdminHome'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<AdminLogin/>}/>
      <Route path='/home' element={<AdminHome/>}/>
    </Routes>
  )
}

export default AdminRoutes
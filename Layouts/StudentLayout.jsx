import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/Components/Student/Navbar'
function StudentLayout() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default StudentLayout
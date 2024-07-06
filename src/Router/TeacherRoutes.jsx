import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeacherSignup from '../Pages/Teacher/TeacherSignup';
import TeacherLogin from '../Pages/Teacher/TeacherLogin';
import TeacherHome from '../Pages/Teacher/TeacherHome';


const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<TeacherSignup />} />
      <Route path='/login' element={<TeacherLogin />} />
      <Route path='/home' element={<TeacherHome/>}/>
    </Routes>
  );
};

export default TeacherRoutes;

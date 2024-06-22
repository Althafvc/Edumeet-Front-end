import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeacherSignup from '../Pages/Teacher/TeacherSignup';
import TeacherLogin from '../Pages/Teacher/TeacherLogin';

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<TeacherSignup />} />
      <Route path='/login' element={<TeacherLogin />} />
    </Routes>
  );
};

export default TeacherRoutes;

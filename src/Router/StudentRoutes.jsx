import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentSignup from '../Pages/Student/StudentSignup';
import StudentLogin from '../Pages/Student/StudentLogin';
import StudentHome from '../Pages/Student/StudentHome';
import Teachers from '../Pages/Student/Teachers';
import OTP from '../Components/Shared/OTP';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<StudentSignup />} />
      <Route path='/login' element={<StudentLogin />} />
      <Route path='/home' element={<StudentHome />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/otp' element={<OTP />} />
    </Routes>
  );
};

export default StudentRoutes;

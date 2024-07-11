import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentSignup from '../Pages/Student/StudentSignup';
import StudentLogin from '../Pages/Student/StudentLogin';
import StudentHome from '../Pages/Student/StudentHome';
import Teachers from '../Pages/Student/Teachers';
import Classes from '../Pages/Student/Classes';
import OTP from '../Components/Shared/OTP';
import About from '../Pages/Student/About';
import StudentLayout from '../../Layouts/StudentLayout';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StudentLayout/>}>
      <Route path='/signup' element={<StudentSignup />} />
      <Route path='/login' element={<StudentLogin />} />
      <Route path='/home' element={<StudentHome />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/otp' element={<OTP />} />
      <Route path='/classes' element={<Classes/>}/>
      <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  );
};

export default StudentRoutes;

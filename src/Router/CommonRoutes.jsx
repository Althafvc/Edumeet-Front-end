import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Components/Shared/LandingPage';
import VerifyEmail from '../Components/Shared/VerifyEmail';
import ForgotOtp from '../Components/Shared/ForgotOtp';
import PasswordChange from '../Components/Shared/PasswordChange';
PasswordChange
ForgotOtp

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/verifyemail' element={<VerifyEmail/>}/>
      <Route path='/forgototp' element={<ForgotOtp/>}/>
      <Route path='/passwordchange' element={<PasswordChange/>}/>
    </Routes>
  );
};

export default CommonRoutes;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Components/Shared/LandingPage';

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    </Routes>
  );
};

export default CommonRoutes;

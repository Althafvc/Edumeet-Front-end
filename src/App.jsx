import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentLogin from './Pages/Student/StudentLogin';
import StudentSignup from './Pages/Student/StudentSignup';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/student/signup' element={<StudentSignup/>}/>
          <Route path='/student/login' element={<StudentLogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// <Common Routes>
import LandingPage from './Components/Shared/LandingPage';
import OTP from './Components/Shared/OTP';
// </Common Routes>



// <Student Routes>
import StudentLogin from './Pages/Student/StudentLogin';
import StudentSignup from './Pages/Student/StudentSignup';
import StudentHome from './Pages/Student/StudentHome';
import Teachers from './Pages/Student/Teachers';
// </Student Routes>



// <Teacher Routes>
import TeacherSignup from './Pages/Teacher/TeacherSignup';
import TeacherLogin from './Pages/Teacher/TeacherLogin';
// </Teacher Routes>


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          // common
          <Route path='/' element={<LandingPage/>}/>
          //common

          //Student
          <Route path='/student/signup' element={<StudentSignup/>}/>
          <Route path='/student/login' element={<StudentLogin/>}/>
          <Route path='/student/home' element={<StudentHome/>}/>
          <Route path='/student/teachers' element={<Teachers/>}/>
          <Route path='/student/otp' element={<OTP/>}/>
          //Student

          //Teacher
          <Route path='/teacher/signup' element={<TeacherSignup/>}/>
          <Route path='/teacher/login' element={<TeacherLogin/>}/>
          <Route path='/teacher/otp' element={<OTP/>}/>
          //Teacher
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;


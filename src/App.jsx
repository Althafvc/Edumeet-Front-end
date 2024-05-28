import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// <Student Routes>
import StudentLogin from './Pages/Student/StudentLogin';
import StudentSignup from './Pages/Student/StudentSignup';
import LandingPage from './Components/LandingPage';
// </Student Routes>

// <Teacher Routes>
import TeacherSignup from './Pages/Teacher/TeacherSignup';
// </Teacher Routes>


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/student/signup' element={<StudentSignup/>}/>
          <Route path='/student/login' element={<StudentLogin/>}/>
          <Route path='/teacher/signup' element={<TeacherSignup/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;


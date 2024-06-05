import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// <Common Routes>
import LandingPage from './Components/LandingPage';
// </Common Routes>



// <Student Routes>
import StudentLogin from './Pages/Student/StudentLogin';
import StudentSignup from './Pages/Student/StudentSignup';
import StudentHome from './Pages/Student/StudentHome';
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
          <Route path='/student/home' element={<StudentHome/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Import route components
import CommonRoutes from './Router/CommonRoutes';
import StudentRoutes from './Router/StudentRoutes';
import TeacherRoutes from './Router/TeacherRoutes';
import AdminRoutes from './Router/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<CommonRoutes />} />
         <Route path='/student/*' element={<StudentRoutes />} />
         <Route path='/teacher/*' element={<TeacherRoutes />} /> 
         <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import './App.css'
import Form from './components/form/Form';
import { Routes, Route } from 'react-router-dom';
import Admin from '../src/components/Site/admin/Admin';
import HR from '../src/components/Site/hr/HR'
import Employee from '../src/components/Site/employee/Employee'
import ProtectedRoutes from './components/utils/ProtectedRoutes';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/hr' element={<HR />} />
          <Route path='/employee' element={<Employee />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
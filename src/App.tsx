
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee'
import EmployeeList from './Pages/EmployeeList/EmployeeList'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/create-employee" />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
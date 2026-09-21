import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import ProgramListPage from '../pages/ProgramListPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/programs" element={<ProgramListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
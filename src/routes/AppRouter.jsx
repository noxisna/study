import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import TodoListPage from "../pages/TodoListPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<TodoListPage />} />   {/* 11번 줄 */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
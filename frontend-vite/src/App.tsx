import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/register/register'
import Login from './pages/auth/login/login'
import { AuthProvider } from './context/auth/AuthContext'
function App() {

  return (
    <>
    <AuthProvider>

    <BrowserRouter>
      <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App

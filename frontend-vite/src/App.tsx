import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/register/register'
import Login from './pages/auth/login/login'
import { AuthProvider } from './context/auth/AuthContext'
import HomePage from './pages/home/home'
import UploadPage from './pages/upload/upload'
import { useEffect } from 'react'
import { useState } from 'react'
import DashboardPage from './pages/dashboard/dashboard'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [isAuthenticated])

  if(!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <>
    <AuthProvider>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  
    </>
  )
}

export default App

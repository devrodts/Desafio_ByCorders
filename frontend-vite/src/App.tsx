import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/register'
import Login from './pages/auth/login'
import { AuthProvider } from './context/auth/AuthContext'
function App() {

  return (
    <>
    <AuthProvider>

    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>

    </>
  )
}

export default App

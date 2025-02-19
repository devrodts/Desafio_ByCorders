import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/auth/AuthContext";
import HomePage from "./pages/home/home";
import UploadPage from "./pages/dashboard/upload/upload";
import DashboardPage from "./pages/dashboard/dashboard";
import RegisterPage from "./pages/auth/register/register";
import LoginPage from "./pages/auth/login/login";
import ProfilePage from "./pages/dashboard/profile/profile";
import DashboardLayout from "./layouts/DashboardLayout";
import TransactionsPage from "./pages/dashboard/transactions/transactions";
const AppRoutes = () => {
  
  const { state } = useAuth();
  const isAuthenticated = state.isAuthenticated;

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/upload" element={<UploadPage />} />
            <Route path="/dashboard/profile" element={<ProfilePage />} />
            <Route path="/dashboard/transactions" element={<TransactionsPage />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

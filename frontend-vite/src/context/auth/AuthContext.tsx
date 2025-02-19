import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import { AuthState } from "./interfaces/state.interface";
import { loginUser } from "../../utils/loginUser";

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<any>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {


  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    const response = await loginUser(email, password);
    console.log(response)
    if (response?.access_token) {
      localStorage.setItem("token", response.access_token);
      dispatch({ type: "LOGIN", payload: { token: response.access_token } });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    window.location.href = "/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOGIN", payload: { token } });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

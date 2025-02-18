import React, { createContext, useContext, useReducer } from 'react';
import { authReducer, initialState } from './authReducer';
import { AuthState } from './interfaces/state.interface';


const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<any> }>({} as { state: AuthState; dispatch: React.Dispatch<any> });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

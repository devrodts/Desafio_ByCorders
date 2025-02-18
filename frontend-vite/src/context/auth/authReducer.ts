import { AuthAction } from "./interfaces/action.interface";
import { AuthState } from "./interfaces/state.interface";

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
}

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
        };
      case "REGISTER":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      default:
        return state;
    }
  };
  
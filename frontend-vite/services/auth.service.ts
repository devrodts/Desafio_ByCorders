import { AuthResponse } from "../interfaces/auth-response";

const API_BASE_URL = "http://localhost:3000";

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

}): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return { message: "Erro ao registrar usuário." };
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { message: "Erro ao fazer login." };
  }
};

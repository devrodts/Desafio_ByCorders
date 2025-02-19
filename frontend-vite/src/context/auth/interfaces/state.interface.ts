import { User } from "./user.interface";

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    access_token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}



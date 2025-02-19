export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    createdAt: Date;
    updatedAt: Date;
}
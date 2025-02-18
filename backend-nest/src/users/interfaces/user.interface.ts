export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    createdAt: Date;
    updatedAt: Date;
}
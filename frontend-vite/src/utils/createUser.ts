import { User } from "./types/user.type"

const API_URL = import.meta.env.VITE_API_URL


export const createUser = async (userData: User) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
    })
    if (!response.ok) {
        throw new Error('Failed to create user')
    }
    return response.json()
}


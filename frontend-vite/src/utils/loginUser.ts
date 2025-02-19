const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Failed to login')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error logging in:', error)
        throw error
    }
}
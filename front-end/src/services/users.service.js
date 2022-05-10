import { apiUrl } from "./api.service"
import { removeStorageItem, setStorageItem } from "./storage.service"

export const login = async (credentials) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    })
    const data = await response.json()
    if (!response.ok) {
        console.log(data)
        const message = data === 'Incorrect password' || data ==='Cannot find user' || data === 'Password is too short'
            ? 'Credentias invalid.'
            : 'Response not ok.'
        throw new Error(message)
    }
    return AuthResponse(data)
}

export const logout = () => {
    removeStorageItem('user')
}

export const cadUser = async(formData) =>{
    const body = JSON.stringify({
        ...formData,
        type: 2
    })
    const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        body,
        headers:{
            'content-type': 'application/json'
        }
    })
    const data = await response.json()

    if(!response.ok) {
        const message = data !== 'Password is too short' && data !== 'Email already exists'
            ? 'Response not ok.'
            : data
            throw new Error(message);
    }
    return AuthResponse(data)
}

const AuthResponse = (data) => {
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}
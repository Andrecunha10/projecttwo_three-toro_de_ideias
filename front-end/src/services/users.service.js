import { apiUrl } from "./api.service"
import { setStorageItem } from "./storage.service"

export const login = async (credentials) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    })
    const data = await response.json()
    if (!response.ok) {
        console.log(data)
        const message = data === 'Incorrect password' || data ==='Cannot find user'
            ? 'Credentias invalid.'
            : 'Response not ok.'
        throw new Error(message)
    }
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}
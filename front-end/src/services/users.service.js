import { apiUrl } from "./api.service"

export const login = async (credentials) => {
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {'content-type': 'application/json'}
    })
    if (!response.ok) {
        const data = await response.json()
        console.log(data)
        const message = data === 'Incorrect password' || data ==='Cannot find user'
            ? 'Credentias invalid.'
            : 'Response not ok.'
        throw new Error(message)
    }
}
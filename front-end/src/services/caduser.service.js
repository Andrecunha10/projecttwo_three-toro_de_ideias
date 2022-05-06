import { apiUrl } from "./api.service"
import { setStorageItem } from "./storage.service"

export const cadUser = async(formData) =>{
    const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            'content-type': 'application/json'
        }
    })
    const data = await response.json()

    if(!response.ok) {
        console.log(data)
        const message = data !== 'Password is too short' && data !== 'Email already exists'
            ? 'Response not ok.'
            : data
            throw new Error(message);
    }
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))
    return userData
}

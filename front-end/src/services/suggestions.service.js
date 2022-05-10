import { apiUrl, authorizationHeaders } from "./api.service"

export const createSuggestion = async (suggestionData) => {
    const response = await fetch(`${apiUrl}/suggestions`, {
        method: 'POST',
        body: JSON.stringify(suggestionData),
        headers: {
            'content-type': 'application/json',
            ...authorizationHeaders()
        }
    })
    if(!response.ok) {
        throw new Error('Response not ok.')
    }
}
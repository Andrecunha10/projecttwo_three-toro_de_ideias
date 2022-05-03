import { apiUrl } from "./api.service"

export const createSuggestion = async (suggestionData) => {
    const response = await fetch(`${apiUrl}/suggestions`, {
        method: 'POST',
        body: JSON.stringify(suggestionData),
        headers: {
            'content-type': 'application/json'
        }
    })
    if(!response.ok) {
        throw new Error('Response not ok.')
    }
}
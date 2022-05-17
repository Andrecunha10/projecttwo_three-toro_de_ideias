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

export const getSuggestionUser= async () => {
    const response = await fetch(`${apiUrl}/suggestions`)

    if(!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const deleteSuggestionById = async (suggestionId) =>{
    const response = await fetch(`${apiUrl}/suggestions/${suggestionId}`, {
        method: 'DELETE',
        headers: authorizationHeaders()
    })
    if(!response.ok) {
        throw new Error('Response not ok.')
    }
}

export const getSuggestionById = async (suggestionId) => {
    const response = await fetch(`${apiUrl}/suggestions/${suggestionId}`)

    if(!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const updateSuggestion = async (suggestion) => {
    const response = await fetch(`${apiUrl}/suggestions/${suggestion.id}`, {
        method: 'PUT',
        body: JSON.stringify(suggestion),
        headers: {
            'content-type': 'application/json',
            ...authorizationHeaders()
        }
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}
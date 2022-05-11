import { apiUrl, authorizationHeaders } from "./api.service"

export const getProblems = async () => {
    const response = await fetch(`${apiUrl}/problems`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const getProblemsById = async (problemId) => {
    const response = await fetch(`${apiUrl}/problems/${problemId}?_embed=suggestions`)
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
    return response.json()
}

export const deleteProblemById = async (problemId) => {
    const response = await fetch(`${apiUrl}/problems/${problemId}`, {
        method: 'DELETE',
        headers: authorizationHeaders()
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}

export const createProblem = async (formData) => {
    const response = await fetch(`${apiUrl}/problems`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json',
            ...authorizationHeaders()
        }
    })
    if (!response.ok){
        throw new Error('Response not ok.')
    }
}
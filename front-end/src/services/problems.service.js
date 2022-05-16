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

export const createProblem = async (problemData) => {
    const response = await fetch(`${apiUrl}/problems`, {
        method: 'POST',
        body: JSON.stringify(problemData),
        headers: {
            'content-type': 'application/json',
            ...authorizationHeaders()
        }
    })
    if (!response.ok){
        throw new Error('Response not ok.')
    }
}

export const updateProblem = async (problemData, problemId) => {
    const response = await fetch(`${apiUrl}/problems/${problemId}`, {
        method: 'PUT',
        body: JSON.stringify(problemData),
        headers: {
            'content-type': 'application/json',
            ...authorizationHeaders()
        }
    })
    if (!response.ok) {
        throw new Error('Response not ok.')
    }
}
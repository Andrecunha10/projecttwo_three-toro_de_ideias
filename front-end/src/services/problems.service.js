import { apiUrl } from "./api.service"

export const getProblems = async () => {
    const response = await fetch(`${apiUrl}/problems`)
        if(!response.ok) {
            throw new Error('Response not ok.')
        }
        return response.json()
}

export const getProblemsById = async (problemId) => {
    const response = await fetch(`${apiUrl}/problems/${problemId}?_embed=suggestions`)
        if(!response.ok) {
            throw new Error('Response not ok.')
        }
        return response.json()
}
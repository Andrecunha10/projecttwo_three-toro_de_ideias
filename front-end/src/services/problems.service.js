export const getProblems = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/problems`)
        if(!response.ok) {
            throw new Error('Response not ok.')
        }
        return response.json()
}

export const getProblemsById = async (problemId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/problems/${problemId}?_embed=suggestions`)
        if(!response.ok) {
            throw new Error('Response not ok.')
        }
        return response.json()
}
export const createSuggestion = async (suggestionData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/suggestions`, {
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
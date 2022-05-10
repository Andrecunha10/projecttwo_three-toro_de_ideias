import { store } from "../store/store"
import { selectUser } from "../store/user/user.selectors"

export const apiUrl = process.env.REACT_APP_API_URL

export const authorizationHeaders = () => {
    const state = store.getState()
    const user = selectUser(state)
    if (user) {
        return {
            'Authorization': `Bearer ${user.accessToken}`
        }
    }
    return {}
    
}
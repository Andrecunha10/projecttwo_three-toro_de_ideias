import { combineReducers, createStore } from 'redux'
import { userReducer } from './user/user.reducer'

const rootReducer = combineReducers({
    userData: userReducer
})

export const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
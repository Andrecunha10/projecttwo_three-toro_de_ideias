import { getStorageItem } from "../../services/storage.service"

const user = JSON.parse(getStorageItem('user'))
export const userReducer = (state = user || null, action) => {
    switch(action.type){
        // case '@@INIT': 
        //     return user || null
        case 'USER_LOGIN':
            return action.payload
        case 'USER_LOGOUT':
            return null
        default:
            return state
    }
    // if (action.type === '@@INIT'){
    //     return user || null
    //     // return user ? user : null
    // }
    // if (action.type === 'USER_LOGIN'){
    //     return action.payload
    // }
    // if (action.type === 'USER_LOGOUT'){
    //     return null
    // }
    // return state
}
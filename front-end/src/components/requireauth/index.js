import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUser } from "../../store/user/user.selectors"

export function RequireAuth({children}){
    const user = useSelector(selectUser)
    if (!user) {
        return <Navigate to='/login' />
    }
    return children
}
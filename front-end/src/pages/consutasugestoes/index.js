import { Container } from "react-bootstrap"
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Loading } from "../../components/loading"
import { getSuggestionUser } from "../../services/suggestions.service"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/user/user.selectors"
import { LayoutDashboard } from "../../components/layoutdashboard"
import { ListSuggestions } from "./listsuggestions"

export function SuggestionUserPage() {
    const user = useSelector(selectUser)
    const [suggestions, setSuggestions] = useState()

    const fetchSuggestions = useCallback( async () => {
        try {
            const data = await getSuggestionUser()
            const filterData = data.filter(item => item.userId === user.id)
            setSuggestions(filterData)
        } catch {
            toast.error('Falha ao buscar sugestoes. Tente novamente em instantes.')
        }
    },[user.id])

    useEffect(() => {
        fetchSuggestions()
    }, [fetchSuggestions])

    return (
        <LayoutDashboard>
            <Container fluid>
                <div className="d-md-flex mt-4 gap-5 align-center">
                    <h1 className="font-ph">Minhas Sugestões</h1>
                </div>
                {suggestions ? (
                    <ListSuggestions suggestion={suggestions} onDeleteSuggestion={fetchSuggestions}/>
                ) : (
                    <Loading />
                )}
            </Container>
        </LayoutDashboard>
    )
}
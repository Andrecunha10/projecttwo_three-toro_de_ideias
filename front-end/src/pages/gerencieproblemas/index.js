import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { LayoutDashboard } from "../../components/layoutdashboard";
import { Loading } from "../../components/loading";
import { getProblems } from "../../services/problems.service";
import { ListProblems } from "./listproblems";

export function PageManageProblems() {
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    const  fetchProblems = async () =>{
        try {
            const data = await getProblems()
            setProblems(data)
        } catch {
            setErrorMsg('Falha ao buscar problemas. Tente novamente em instantes.')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProblems()
    }, [])

    return (
        <LayoutDashboard>
            <Container fluid>
                {loading && (
                    <Loading />
                )}
                {errorMsg && (
                    <Alert variant="info" className="text-center my-4">{errorMsg}</Alert>
                )}
                <ListProblems problems={problems} onDeleteProblems={fetchProblems}/>
            </Container>
        </LayoutDashboard>
    )
}

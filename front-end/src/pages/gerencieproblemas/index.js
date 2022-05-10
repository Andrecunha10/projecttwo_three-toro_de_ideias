import { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { LayoutDashboard } from "../../components/layoutdashboard";
import { Loading } from "../../components/loading";
import { getProblems } from "../../services/problems.service";

export function PageManageProblems() {
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
        const  fetchProblems = async () =>{
            try {
                const data = await getProblems()
                setProblems(data)
            } catch {
                setErrorMsg('Falha ao buscar problemas. Tente novamente em instantes.')
            }
            setLoading(false)
        }
        fetchProblems()
    }, [])

    return (
        <LayoutDashboard>
            <Container fluid>
                <div className="d-md-flex mt-4 gap-5 align-center">
                    <h1 className="font-ph">Gerenciar Problemas</h1>
                    <Button variant="dark my-auto">Novo Problema</Button>
                </div>
                {loading && (
                    <Loading />
                )}
                {errorMsg && (
                    <Alert variant="info" className="text-center my-4">{errorMsg}</Alert>
                )}
                <Table className="font-ph font-20px mt-3" striped hover>
                    <thead>
                        <tr>
                            <th>Problema</th>
                            <th>Departamento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map(problem => (
                            <tr key={problem.id}>
                            <td>{problem.name}</td>
                            <td>{problem.departament}</td>
                            <td className="d-grid d-sm-flex gap-1 gap-sm-2" >
                                <Button variant="dark" className="btn-sm">Editar</Button>
                                <Button className="btn-sm">Deletar</Button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </LayoutDashboard>
    )
}

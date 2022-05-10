import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProblemById } from "../../services/problems.service";

export function ListProblems( {problems, onDeleteProblems} ){
    const deleteProblem = async (event) =>{
        try{
            await deleteProblemById(event.id)
            await onDeleteProblems()
            toast.success('Problema excluido com sucesso.')
        } catch (error){
            console.error(error)
            toast.error('Falha ao deletar problema, tente novamente.')
        }
    }
    return (
        <>
            <div className="d-md-flex mt-4 gap-5 align-center">
                <h1 className="font-ph">Gerenciar Problemas</h1>
                <Button as={Link} to='/dashboar/problemas/cadastrar' variant="dark my-auto">Novo Problema</Button>
            </div>
            <Table className="font-ph font-20px mt-3" striped hover responsive>
                <thead>
                    <tr>
                        <th>Problema</th>
                        <th>Departamento</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {problems.map(problem => (
                        <tr key={problem.id}>
                        <td>{problem.name}</td>
                        <td>{problem.departament}</td>
                        <td>
                            <div className="d-grid d-sm-flex gap-1 gap-sm-2"> 
                                <Button 
                                    variant="dark" 
                                    className="btn-sm"
                                    as={Link}
                                    to={`/dashboar/problemas/editar/${problem.id}`}
                                >Editar</Button>
                                <Button 
                                    className="btn-sm"
                                    onClick={() => deleteProblem(problem)}
                                >Deletar</Button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
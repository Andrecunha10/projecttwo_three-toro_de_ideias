import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProblemById } from "../../services/problems.service";

export function ListProblems( {problems, onDeleteProblems} ){
    const [problemToDelete, setProblemToDelete] = useState()
    const handleClose = () => setProblemToDelete(undefined)
    const clickDelete = (problem) =>{
        setProblemToDelete(problem)
    }
    const deleteProblem = async () =>{
        try{
            await deleteProblemById(problemToDelete.id)
            await onDeleteProblems()
            toast.success('Problema excluido com sucesso.')
        } catch (error){
            console.error(error)
            toast.error('Falha ao deletar problema, tente novamente.')
        }
        handleClose()
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
                                    onClick={() => clickDelete(problem)}
                                >Deletar</Button>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={problemToDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tem certeza que deseja excluir?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ao clicar em confirmar, o problema <strong>{problemToDelete?.name}</strong> será deletado definitivamente. Deseja prosseguir?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={deleteProblem}>
                        Deletar problema
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

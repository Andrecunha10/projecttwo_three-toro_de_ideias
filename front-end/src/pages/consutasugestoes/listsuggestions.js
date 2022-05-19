import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteSuggestionById } from "../../services/suggestions.service";

export function ListSuggestions({ suggestion, onDeleteSuggestion }) {
    const [suggestionToDelete, setSuggestionToDelete] = useState()
    const handleClose = () => setSuggestionToDelete(undefined)
    const clickDelete = (suggestion) =>{
        setSuggestionToDelete(suggestion)
    }
    const deleteSuggestion = async () =>{
        try{
            await deleteSuggestionById(suggestionToDelete.id)
            await onDeleteSuggestion()
            toast.success('Problema excluido com sucesso.')
        } catch (error){
            console.error(error)
            toast.error('Falha ao deletar problema, tente novamente.')
        }
        handleClose()
    }
    return (
        <>
            <Table className="font-ph font-20px mt-2" striped hover responsive>
                <thead>
                    <tr>
                        <th>Problema</th>
                        <th>Departamento</th>
                        <th>Descrição</th>
                        <th>Sugestão</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {suggestion.map(suggestion => (
                        <tr key={suggestion.id}>
                            <td>{suggestion.problemName}</td>
                            <td>{suggestion.problemDepartament}</td>
                            <td>{suggestion.problemDescription}</td>
                            <td>{suggestion.message}</td>
                            <td>
                                <div className="d-grid d-sm-flex gap-1 gap-sm-2">
                                    <Button
                                        variant="dark"
                                        className="btn-sm"
                                        as={Link}
                                        to={`/dashboard/sugestoes/${suggestion.id}`}
                                    >Editar</Button>
                                    <Button
                                        className="btn-sm"
                                    onClick={() => clickDelete(suggestion)}
                                    >Deletar</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={suggestionToDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tem certeza que deseja excluir?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ao clicar em confirmar, a sugestão será deletada definitivamente. Deseja prosseguir?</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={deleteSuggestion}>
                        Deletar problema
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
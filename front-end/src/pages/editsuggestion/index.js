import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LayoutDashboard } from '../../components/layoutdashboard/index'
import { Loading } from '../../components/loading'
import { getSuggestionById, updateSuggestion } from '../../services/suggestions.service'
import { selectUser } from '../../store/user/user.selectors'

export function EditSuggestionPage() {
    const user = useSelector(selectUser)
    const { id } = useParams()
    const [suggestion, setSuggestion] = useState()
    const navigate = useNavigate()
    
    
    useEffect(() => {
        const fetchSuggestion = async () => {
            try {
                const data = await getSuggestionById(id)
                if (user.id === data.userId){
                    setSuggestion(data)
                } else {
                    navigate('/dashboard/sugestoes')
                }                
            } catch (error) {
                toast.error('Falha ao buscar dados da sugestão. Recarregue a página')
            }
        }
        fetchSuggestion()
    }, [id, navigate, user.id])


    const handleChange = (event) => {
        setSuggestion({
            ...suggestion,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await updateSuggestion(suggestion)
            toast.success('Sugestão alterada com sucesso.')
            navigate('/dashboard/sugestoes')
        } catch (error) {
            console.error(error)
            toast.error('Falha ao alterar a sugestão. Tente novamente', {
                theme:'colored'
            })
        }
    }

    return (
        <LayoutDashboard>
            <Container>
                <h1 className="font-ph my-4">Editar Sugestão</h1>
                {suggestion ? (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 font-ph font-20px" controlId="problem-name">
                            <Form.Label className="mb-0">Nome do Problema</Form.Label>
                            <Form.Control
                                type="text"
                                name="problemName"
                                value={suggestion.problemName}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 font-ph font-20px" controlId="problem-departament">
                            <Form.Label className="mb-0">Departamento</Form.Label>
                            <Form.Control
                                type="text"
                                name="problemDepartament"
                                value={suggestion.problemDepartament}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-0 font-ph" controlId="problem-description">
                            <Form.Label className="mb-0 font-20px">Descrição do Problema</Form.Label>
                            <Form.Control
                                as='textarea'
                                name="problemDescription"
                                value={suggestion.problemDescription}
                                disabled
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3 font-ph" controlId="suggestion-message">
                            <Form.Label className="mb-0 font-20px">Sugestão</Form.Label>
                            <Form.Control
                                as='textarea'
                                name="message"
                                placeholder="Sua Mensagem"
                                required
                                value={suggestion.message}
                                onChange={handleChange}
                                maxLength="225"
                            ></Form.Control>
                            <p className="font-ph mb-2 text-end">{suggestion.message.length} / 225</p>
                        </Form.Group>
                        <Button type="subimit" variant="dark" className="font-ph font-20px">Alterar</Button>
                    </Form>
                ) : (
                    <Loading />
                )}
            </Container>
        </LayoutDashboard>
    )
}
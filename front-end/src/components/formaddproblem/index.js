import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import styled from "styled-components"
import { createProblem } from "../../services/problems.service"

export const FormAddEditProblem = () => {
    const[formData, setFormData] = useState({
        name: '',
        shortDescription: '',
        description: '',
        departament: ''
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            await createProblem(formData)
            navigate('/dashboard/problemas')
            console.log('cadastrou')
        } catch (error) {
            console.error(error)
            toast.error('Não foi possível realizar o cadastro. Tente novamente', {
                theme: 'colored'
            })
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 font-ph font-20px" controlId="problem-name">
                <Form.Label className="mb-0">Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nome do problema"
                    required
                    name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3 font-ph font-20px" controlId="problem-departament">
                <Form.Label className="mb-0">Departamento</Form.Label>
                <Form.Control as='select' name="departament" required onChange={handleChange}>
                    <option value="">Selecione seu departamento</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Custumer Services">Custumer Services</option>
                    <option value="Desenvolvimento">Desenvolvimento</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Planejamento e Controle de Produção">Planejamento e Controle de Produção</option>
                    <option value="Produção">Produção</option>
                    <option value="Recursos Humanos">Recursos Humanos</option>
                    <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 font-ph" controlId="problem-short-description">
                <Form.Label className="mb-0 font-20px">Descrição Curta</Form.Label>
                <StyledTextarea
                    className="w-100"
                    name="shortDescription"
                    placeholder="Texto que aparecerá na lista de problemas, na página Colaboração"
                    maxLength="50"
                    required
                    value={formData.shortDescription}
                    onChange={handleChange}
                ></StyledTextarea>
            </Form.Group>
            <Form.Group className="mb-3 font-ph" controlId="problem-description">
                <Form.Label className="mb-0 font-20px">Descrição</Form.Label>
                <StyledTextarea
                    className="w-100"
                    name="description"
                    placeholder="Texto que aparecerá na tela de sugestões."
                    required
                    value={formData.description}
                    onChange={handleChange}
                ></StyledTextarea>
            </Form.Group>
            <Button type="subimit" variant="dark" className="font-ph font-20px">Cadastrar</Button>
        </Form>
    )
}

const StyledTextarea = styled.textarea`
    resize: none;
`
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const emptyFormData = {
        name: '',
        shortDescription: '',
        description: '',
        departament: ''
}

export const FormAddEditProblem = ({initialValue = emptyFormData, buttonLabel = 'Cadastrar', onSubmit}) => {
    
    
    
    const[formData, setFormData] = useState(initialValue)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 font-ph font-20px" controlId="problem-name">
                <Form.Label className="mb-0">Nome do problema</Form.Label>
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
                    <option value={formData.departament}>{formData.departament || 'Selecione seu departamento'}</option>
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
            <Form.Group className="mb-0 font-ph" controlId="problem-short-description">
                <Form.Label className="mb-0 font-20px">Descrição Curta</Form.Label>
                <Form.Control
                    as='textarea'
                    name="shortDescription"
                    placeholder="Texto que aparecerá na lista de problemas, na página Colaboração"
                    maxLength="50"
                    required
                    value={formData.shortDescription}
                    onChange={handleChange}
                ></Form.Control>
                <p className="font-ph text-end mb-0">{formData.shortDescription.length} / 50</p>
            </Form.Group>
            <Form.Group className="mb-3 font-ph" controlId="problem-description">
                <Form.Label className="mb-0 font-20px">Descrição</Form.Label>
                <Form.Control
                    as='textarea'
                    name="description"
                    placeholder="Texto que aparecerá na tela de sugestões."
                    required
                    value={formData.description}
                    onChange={handleChange}
                ></Form.Control>
            </Form.Group>
            <Button type="subimit" variant="dark" className="font-ph font-20px">{buttonLabel}</Button>
        </Form>
    )
}

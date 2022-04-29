import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CadForm () {
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        departament: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="font-pm">Cadastre-se</h3>
            <Form.Group className="mb-3 font-ph font-20px" controlId="cad-name">
                <Form.Label className="mb-0">Nome</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Informe seu nome"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group className="mb-3 font-ph font-20px" controlId="cad-nickname">
                <Form.Label className="mb-0">Apelido</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Apelido ou nome ou sobrenome" 
                    required
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3 font-ph font-20px" controlId="cad-departament">
                <Form.Label className="mb-0">Departamento</Form.Label>
                <Form.Control as='select' name="departament" onChange={handleChange} required>
                    <option value="">Selecione seu departamento</option>
                    <option value="Adm">Administrativo</option>
                    <option value="Cml">Comercial</option>
                    <option value="CS">Custumer Services</option>
                    <option value="Dev">Desenvolvimento</option>
                    <option value="Fin">Financeiro</option>
                    <option value="Mkt">Marketing</option>
                    <option value="PCD">Planejamento e Controle de Produção</option>
                    <option value="Prd">Produção</option>
                    <option value="RH">Recursos Humanos</option>
                    <option value="TI">Tecnologia da Informação</option>
                    value
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 font-ph font-20px" controlId="cad-email">
                <Form.Label className="mb-0">E-mail</Form.Label>
                <Form.Control
                    type="email" 
                    placeholder="exemplo@exemplo.com"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group className="mb-3 font-ph font-20px" controlId="cad-password">
                <Form.Label className="mb-0">Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Senha de acesso" 
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="dark" type="submit" className="font-ph font-20px">
                Criar Conta
            </Button>
        </Form>
    )
}
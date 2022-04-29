import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function LoginForm (){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            <h3 className="font-pm">Login</h3>
            <Form.Group className="mb-3 font-ph font-20px" controlId="login-email">
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
            <Form.Group className="mb-3 font-ph font-20px" controlId="login-password">
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
                Entrar
            </Button>
        </Form>
    )
}
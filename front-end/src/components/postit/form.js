import { useState } from "react"
import { Alert, Button } from "react-bootstrap"

const initialFormData = {
    userMessage: '',
    userName: '',
    userDep: ''
}

export function PostItForm( {collaborationId, onRegistrer}){
    const [formData, setFormData] = useState(initialFormData)
    const [success, setSuccess] = useState(false)
    const [submiting, setSubimiting] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    const handleChange = (event) => {
         setFormData({
            ...formData,
            [event.target.name]: event.target.value
         })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setSubimiting(true)
            setErrorMsg(undefined)
            await fetch(`${process.env.REACT_APP_API_URL}/problems`, {
                method: 'POST',
                body: JSON.stringify({
                    message: formData.userMessage,
                    name: formData.userName,
                    departament: formData.userDep,
                    collaborationId: parseInt(collaborationId)
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            setSuccess(true)
            setFormData(initialFormData)
            onRegistrer()
        } catch (err){
            console.error(err)
            setErrorMsg('Falha ao carregar sugestões. Tente Novamente')
        }
        setSubimiting(false)
    }

    return(
        <>
            <h2 className='font-pm fw-bold mt-5'>Deixe a sua sugestão</h2>
            {success && (
                <Alert variant="info" dismissible onClose={() => setSuccess(false)}>Sugestão cadastrada com Sucesso!</Alert>
            )}
            {errorMsg && (
                <Alert variant="danger">{errorMsg}</Alert>
            )}
            <div className='post-it p-3 font-20px bg-color-blue pi-problem-size-form mt-4 m-auto'>
                <form className="d-grid gap-3" onSubmit={handleSubmit}>
                    <textarea 
                        id="form-message" 
                        className="font-ph mb-1 line-height-1 form-postit form-postit-ta" 
                        name="userMessage" 
                        placeholder="Sua Sugestão" 
                        maxLength="225" 
                        required
                        value={formData.userMessage}
                        onChange={handleChange}
                    ></textarea>
                    <div className="d-flex gap-1 font-pm fw-bold text-center">
                        <input 
                            id="form-name" 
                            type="text" 
                            className="w-100 form-postit" 
                            name="userName"
                            placeholder="Seu Nome" 
                            maxLength="15"
                            required
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        <input 
                            id="form-dep" 
                            type="text" 
                            className="w-100 form-postit" 
                            name="userDep"
                            placeholder="Dep."
                            maxLength="3" 
                            required 
                            value={formData.userDep}
                            onChange={handleChange}
                        />
                    </div>
                    <Button variant="dark" type="submit" disabled={submiting}>Sugerir</Button>
                </form>
            </div>
        </>
    )
}
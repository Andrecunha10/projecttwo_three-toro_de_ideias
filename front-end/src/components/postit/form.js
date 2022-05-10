import { useState } from "react"
import { Button } from "react-bootstrap"
import { createSuggestion } from "../../services/suggestions.service"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/user/user.selectors"
import { AlthLogin } from "../authlogin"
import { toast } from "react-toastify"


export function PostItForm( {problemId, onRegistrer}){
    const user = useSelector(selectUser)
    const [formData, setFormData] = useState('')
    const [submiting, setSubimiting] = useState(false)

    const handleChange = (event) => {
         setFormData(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setSubimiting(true)
            await createSuggestion({
                message: formData,
                name: user.nickname,
                departament: user.departament,
                problemId: parseInt(problemId),
                userId: user.id
            })
            toast.success('Sugestão cadastrada com Sucesso!')
            setFormData('')
            onRegistrer()
        } catch (err){
            console.error(err)
            toast.error('Falha ao carregar sugestões. Tente Novamente', {
                theme: "colored"
            })
        }
        setSubimiting(false)
    }

    return(
        <>
            <h2 className='font-pm fw-bold mt-5'>Deixe a sua sugestão</h2>
            {user ? (
                <div className='post-it p-3 bg-color-blue pi-problem-size-form mt-4 m-auto'>
                <form className="d-grid" onSubmit={handleSubmit}>
                    <textarea 
                        id="form-message" 
                        className="font-ph line-height-1 form-postit form-postit-ta font-20px" 
                        name="userMessage" 
                        placeholder="Sua Sugestão" 
                        maxLength="225" 
                        required
                        value={formData}
                        onChange={handleChange}
                    ></textarea>
                    <p className="font-ph mb-2 text-end">{formData.length} / 225</p>
                    <Button  className="font-20px" variant="dark" type="submit" disabled={submiting}>Sugerir</Button>
                </form>
                </div>
            ) : (
                <>
                    <h4 className="font-ph my-3">É necessário ter uma conta para deixar uma sugestão. Faça login ou crie uma conta.</h4>
                    <AlthLogin redirectAfterLogin={false} />
                </>
            )}
        </>
    )
}
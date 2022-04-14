import { useState } from "react"
import { Button } from "react-bootstrap"

export function PostItForm(){
    const [formData, setFormData] = useState({
        userMessage: '',
        userName: '',
        userDep: ''
    })

    const handleChange = (event) => {
         setFormData({
            ...formData,
            [event.target.name]: event.target.value
         })
    }

    return(
        <div className='post-it p-3 font-20px bg-color-blue pi-problem-size-form mt-4 m-auto'>
             <form action="" className="d-grid gap-3">
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
                        maxLength="12"
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
                        maxLength="5" 
                        required 
                        value={formData.userDep}
                        onChange={handleChange}
                    />
                </div>
                <Button variant="dark" type="submit">Sugerir</Button>
            </form>
        </div>
    )
}
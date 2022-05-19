import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormAddEditProblem } from "../../components/formaddproblem";
import { LayoutDashboard } from "../../components/layoutdashboard";
import { createProblem } from "../../services/problems.service";

export function AddPrblemPage () {
    const navigate = useNavigate()
    const handleSubmit = async (formData) =>{
        try{
            await createProblem(formData)
            navigate('/dashboard/problemas')
        } catch (error) {
            console.error(error)
            toast.error('Não foi possível realizar o cadastro. Tente novamente', {
                theme: 'colored'
            })
        }
    }

    return(
        <LayoutDashboard>
            <Container>
                <h1 className="font-ph my-4">Cadastrar Novo Problema</h1>
                <FormAddEditProblem onSubmit={handleSubmit}/>
            </Container>
        </LayoutDashboard>
    )
}
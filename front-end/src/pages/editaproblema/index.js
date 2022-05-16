import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FormAddEditProblem } from "../../components/formaddproblem";
import { LayoutDashboard } from "../../components/layoutdashboard";
import { Loading } from "../../components/loading";
import { getProblemsById, updateProblem } from "../../services/problems.service";

export function EditProblemPage() {
    const {id} = useParams()
    const [problem, setProblem] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProblem = async () => {
            try{
                const data = await getProblemsById(id)
                setProblem(data)
            } catch (error){
                console.error(error)
                toast.error('Falha ao buscar dados do problema. Recarregue a página')
            }
        }   
        fetchProblem()
    }, [id])
    const handleSubmit = async (formData) =>{
        try{
            await updateProblem(formData, id)
            navigate('/dashboard/problemas')
        } catch (error) {
            console.error(error)
            toast.error('Falha ao alterar o problema. Tente novamente')
        }
    }
    return (
        <LayoutDashboard>
            <Container>
                <h1 className="font-ph my-4">Editar Problema</h1>
                {problem ? (
                    <FormAddEditProblem 
                        initialValue={{
                            name: problem.name,
                            shortDescription: problem.shortDescription,
                            description: problem.description,
                            departament: problem.departament
                        }}
                        buttonLabel='Alterar'
                        onSubmit={handleSubmit}
                    />

                ) : (
                    <Loading />
                )}
                
            </Container>
        </LayoutDashboard>
    )
}
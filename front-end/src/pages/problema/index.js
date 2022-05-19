import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { PostItForm } from "../../components/postit/form";
import { PostItProblem } from "../../components/postit/problems";
import { getProblemsById } from "../../services/problems.service";
import { PageNotFound } from "../notfound";

export function PageProblem(){
    const {id} = useParams()
    const [problem, setProblem] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    const fetchProblem = useCallback( async () => {
        try {
            const data = await getProblemsById(id)
            setProblem(data)
            setLoading(false)
        } catch (error) {
            const message = error.message === 'Response not ok.' ? '404' : 'Falha ao carregar a página. Tente novamente em instantes.'
            setErrorMsg(message)
            setLoading(false)
        }
    }, [id])
    useEffect(() => {
        fetchProblem()
    }, [fetchProblem])
    if (loading){
        return <Loading />
    }
    if (errorMsg === '404') {
        return <PageNotFound />
    }
    return(
        <MainLayout>
            <Container>
                { errorMsg ? (
                        <Alert variant="info" className="text-center my-4">{errorMsg}</Alert>
                    ) :  (
                        <>
                        <h1 className='font-pm fw-bold text-center mt-4'>{problem?.name}</h1>
                        <p className='font-ph font-20px mt-3'>{problem?.description}</p>
                        <p className='font-ph font-20px'><strong>Área de Atuação:</strong> {problem?.departament}</p>
                        <h2 className='font-pm fw-bold'>Sugestões do Time</h2>
                        
                            <PostItProblem problem={problem.suggestions}/>
                            <PostItForm problem={problem} onRegistrer={fetchProblem}/>
                        </>
                    )}
                    
            </Container>
        </MainLayout>
    )
}
import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { MainLayout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { PostItCol } from "../../components/Post_it";


export function PageColaboracao() {
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        fetch('http://localhost:3001/collaborations')
            .then((response) => response.json())
            .then((data) => { 
                setProblems(data)
            })
            .catch(() => {
                setErrorMsg('Falha ao carregar a página. Tente novamente em instantes.')
            })
            .finally(() => setLoading(false))
    }, [])
    
    return(
        <MainLayout>
            <Container>
                <h1 className='font-pm fw-bold mt-4 text-center'>Colaboração</h1>
                {loading && (
                    <Loading />
                )}
                {errorMsg && (
                    <Alert variant="info" className="text-center my-4">{errorMsg}</Alert>
                )}
                <div className='display-grid gap-4 gap-md-5 justify-content-center mt-5'>
                    {problems.map(problem =>(
                        <PostItCol key={problem.id} problem={problem}/>
                    ))
                    }
                </div>
            </Container>
        </MainLayout>
    )
}
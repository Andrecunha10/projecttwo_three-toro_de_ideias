import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { MainLayout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { PostItCol } from "../../components/postit";


export function PageColaboracao() {
    const [problems, setProblems] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/collaborations`)
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
                <div className='colaboration-css display-grid gap-4 gap-md-5 justify-content-center mt-5'>
                    {problems.map(problem =>(
                        <PostItCol key={problem.id} problem={problem}/>
                    ))
                    }
                </div>
            </Container>
        </MainLayout>
    )
}
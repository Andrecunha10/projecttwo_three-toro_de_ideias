import { useEffect, useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Loading } from "../../components/loading";
import { PostItProblem } from "../../components/post_it/problems";
import { PageNotFound } from "../notfound";

export function PageProblem(){
    const params = useParams()
    const [problem, setProblem] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/collaborations/${params.id}?_embed=problems`)
                if(!response.ok) {
                    throw new Error('Response not ok.')
                }
                const data = await response.json()
                setProblem(data)
                setLoading(false)
            } catch (error) {
                const message = error.message === 'Response not ok.' ? '404' : 'Falha ao carregar a página. Tente novamente em instantes.'
                setErrorMsg(message)
                setLoading(false)
            }
        }
        fetchProblem()
    }, [params.id])
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
                        <div className="colaboration-css display-grid-problem justify-content-center mt-4 gap-4">
                            {console.log('teste', problem.problems)}
                            <PostItProblem pb={problem.problems}/>
                            
                          
                        </div>
                        <h2 className='font-pm fw-bold mt-5'>Deixe a sua sugestão</h2>
                            <div className='post-it p-3 font-20px bg-color-green pi-problem-size-form mt-4 m-auto'>
                                <form action="" className="d-grid gap-3">
                                    <textarea id="form-message" className="font-ph mb-1 line-height-1 form-postit form-postit-ta" name="message" placeholder="Sua Sugestão" maxLength="225" required></textarea>
                                    <div className="d-flex gap-1 font-pm fw-bold text-center">
                                        <input id="form-name" type="text" className="w-100 form-postit" placeholder="Seu Nome" required />
                                        <input id="form-name" type="text" className="w-100 form-postit" placeholder="Dep." required />
                                    </div>
                                    <Button variant="dark">Sugerir</Button>
                                </form>
                            </div>
                        </>
                    )}
                    
            </Container>
        </MainLayout>
    )
}
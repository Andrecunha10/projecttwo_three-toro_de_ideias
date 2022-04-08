import { Container } from "react-bootstrap";
import { MainLayout } from "../../components/layout";
import { PostItCol } from "../../components/Post_it";

const problems = [
    {
        id: 1,
        name: 'Hora Extra',
        shortDescription: 'Elevado custo com horas extras',
        color: 'bg-color-green',
        rotate: 'rotate-5'
    },
    {
        id: 2,
        name: 'Reclamação Clientes',
        shortDescription: 'Aumento do número de reclamações de clientes',
        color: 'bg-color-yellow',
        rotate: 'rotate5'
    },
    {
        id: 3,
        name: 'Atrasos na Chegada',
        shortDescription: 'Funcinários chegam atrasados no posto de trabalho',
        color: 'bg-color-pink',
        rotate: 'rotate-5'
    },
    {
        id: 4,
        name: 'Produto X',
        shortDescription: 'O que podemos melhorar no Produto X?',
        color: 'bg-color-blue',
        rotate: 'rotate5'
    },   
]

export function PageColaboracao() {
    return(
        <MainLayout>
            <Container>
                <h1 className='font-pm fw-bold mt-4 text-center'>Colaboração</h1>
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
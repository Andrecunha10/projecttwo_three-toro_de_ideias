import { MainLayout } from "../../components/layout";
import { Container } from "react-bootstrap";

export function PageNotFound (){
    return (
        <MainLayout>  
            <Container>
            <h1 className="font-pm mt-4">Ops!</h1>
            <h2 className="font-ph">Procuramos em toda parte.</h2>
            <h2 className="font-ph">Mas não conseguimos encontrar a página que você está procurando.</h2>
            <a className='font-ph font-20px text-decoration-underline' href="/">Clique aqui e volte para a página principal.</a>
            </Container>
        </MainLayout>  
    )
}
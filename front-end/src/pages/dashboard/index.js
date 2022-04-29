import { Container } from "react-bootstrap";
import { LayoutDashboard } from "../../components/layoutdashboard";

export function DashboardPage() { 
    return (
        <LayoutDashboard>
            <Container fluid>
                <h1 className="font-ph mt-4">Bem vindo(a) André!</h1>
                <p className="font-ph font-20px">Utilize o menu para gerenciar os dados do site.</p>
                <p className="font-ph font-20px">Você pode editar seus dados cliando sobre o seu nome.</p>
            </Container>
        </LayoutDashboard>
    )
}
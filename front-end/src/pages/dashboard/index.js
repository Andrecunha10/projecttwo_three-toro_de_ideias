import { Container } from "react-bootstrap";
import { LayoutDashboard } from "../../components/layoutdashboard";

export function DashboardPage() { 
    return (
        <LayoutDashboard>
            <Container fluid>
                <h1>Bem vindo(a) André!</h1>
            </Container>
        </LayoutDashboard>
    )
}
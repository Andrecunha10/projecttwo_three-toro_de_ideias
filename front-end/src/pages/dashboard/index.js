import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutDashboard } from "../../components/layoutdashboard";
import { selectUser } from "../../store/user/user.selectors";

export function DashboardPage() { 
    const user = useSelector(selectUser)
    return (
        <LayoutDashboard>
            <Container fluid>
                <h1 className="font-ph mt-4">Bem vindo(a) {user.name}</h1>
                {user.type === 1 ? (
                    <div>
                        <p className="font-ph font-20px">Utilize o menu para gerenciar os dados do site.</p>
                        <p className="font-ph font-20px">Você pode editar seus dados cliando sobre o seu nome.</p>
                    </div>
                ) : (
                    <p className="font-ph font-20px">Você pode editar seus dados cliando sobre o seu nome.</p>
                )}
            </Container>
        </LayoutDashboard>
    )
}
import { Container } from "react-bootstrap";
import { FormAddEditProblem } from "../../components/formaddproblem";
import { LayoutDashboard } from "../../components/layoutdashboard";

export function AddPrblemPage () {
    return(
        <LayoutDashboard>
            <Container>
                <h1 className="font-ph my-4">Cadastrar Novo Problema</h1>
                <FormAddEditProblem />
            </Container>
        </LayoutDashboard>
    )
}
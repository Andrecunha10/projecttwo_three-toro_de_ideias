import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export function TopBar ({onOpen}) {
    return (
        <StyledDiv>
            <Container fluid>
                <Navbar className="font-ph" expand='md'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onOpen}/>
                    <Nav className="ms-auto">
                        <Dropdown align='end'>
                            <Dropdown.Toggle variant="transparent" className="text-white font-20px">André</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Alterar Dados</Dropdown.Item>
                                <Dropdown.Item>Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar>
            </Container>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: var(--main-color);
    .navbar-toggler{
        background-color: #fff;
        color: #fff;
    }
    .dropdown-menu {
        position: absolute;
    }
`

import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../services/users.service";
import { userLogout } from "../../store/user/user.actions";
import { selectUser } from "../../store/user/user.selectors";

export function TopBar ({onOpen}) {
    const user = useSelector(selectUser)
    // const user = useSelector((state) => {
    //     return state
    // })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout('user')
        dispatch(userLogout())
        navigate('/')
    }
    return (
        <StyledDiv>
            <Container fluid>
                <Navbar className="font-ph" expand='md'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onOpen}/>
                    <Nav className="ms-auto">
                        <Dropdown align='end'>
                            <Dropdown.Toggle variant="transparent" className="text-white font-20px">{user.nickname || user.name}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
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
    .dropdown-menu {
        position: absolute;
    }
`

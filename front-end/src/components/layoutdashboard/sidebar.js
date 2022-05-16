import { CloseButton, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { selectUser } from "../../store/user/user.selectors"
import { SidebarItens } from "./sidebaritem"

const menuItens = [
    {
        to: '/dashboard',
        text: 'Dashboard',
        checkAllPath: true,
        userTypes:[1, 2]
    },
    {
        to: '/dashboard/problemas',
        text: 'Problemas',
        checkAllPath: false,
        userTypes:[1]
    },
    {
        to: '/dashboard/sugestoes',
        text: 'Sugestões',
        checkAllPath: false,
        userTypes:[1, 2]
    }
]

export function Sidebar ({isOpen, onClose}) {
    const {type} = useSelector(selectUser)
    const filterMenuItens = menuItens.filter(item => item.userTypes.includes(type))
    return (
        <SidebarStyled className="text-white d-flex flex-column p-3" isOpen={isOpen}>
            <CloseButton variant="white"  className='ms-auto d-md-none' onClick={onClose} />
            <Link to='/' className="h1 font-pm text-white text-decoration-none">Toró de Ideias!</Link>
            <Nav variant="pills" className="flex-column">
                {filterMenuItens.map((item, index) => (
                    <SidebarItens key={index} item={item}/>
                ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    background-color: var(--main-color);
    width: 330px;
    @media (max-width: 767px){
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100vh;
        margin-left: -100%;
        transition: all 0.3s linear;
        ${(props) => props.isOpen && `
        margin-left: 0;
        `}
    }
    .nav-pills .nav-link.active{
        background-color: var(--bs-purple);
    }
`
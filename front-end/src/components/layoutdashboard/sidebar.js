import { CloseButton, Nav } from "react-bootstrap"
import styled from "styled-components"
import { SidebarItens } from "./sidebaritem"

const menuItens = [
    {
        to: '/dashboard',
        text: 'Dashboard'
    },
    {
        to: '/dashboard/problemas',
        text: 'Problemas'
    }
]

export function Sidebar ({isOpen, onClose}) {
    return (
        <SidebarStyled className="text-white d-flex flex-column p-3" isOpen={isOpen}>
            <CloseButton variant="white"  className='ms-auto d-md-none' onClick={onClose} />
            <p className="h1 font-pm text-white">Toró de Ideias!</p>
            <Nav variant="pills" className="flex-column">
                {menuItens.map((item, index) => (
                    <SidebarItens key={index} item={item}/>
                ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    background-color: var(--main-color);
    width: 280px;
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
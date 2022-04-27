import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/toro_ideias_menu.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function Header() {
    return (
      <header>
        <NavbarStyled expand="sm">
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src={Logo} alt='Logo Toró de Ideias' width={113} height={54} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/' className='text-white'>HOME</Nav.Link>
                <Nav.Link as={Link} to='/colaboracao' className='text-white'>COLABORAÇÃO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </NavbarStyled>
      </header>
    )
  }

  const NavbarStyled = styled(Navbar)`
    background: linear-gradient(94.37deg, rgba(43, 38, 38, 0.85) 0.43%, #2B2628 60%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Patrick Hand', sans-serif;
    font-size: 1.5rem;
    .navbar-toggler{
      background-color: #fff;
      color: #fff;
    }
  `
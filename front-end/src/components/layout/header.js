import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/toro_ideias_menu.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
      <header>
        <Navbar className='nav-header' expand="sm">
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
        </Navbar>
      </header>
    )
  }
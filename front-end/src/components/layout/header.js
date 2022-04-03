import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/img/toro_ideias_menu.svg'


export function Header() {
    return (
      <header>
        <Navbar className='nav-header' expand="sm">
          <Container>
            <Navbar.Brand href='/'>
              <img src={Logo} alt='Logo Toró de Ideias' width={113} height={54} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='/' className='text-white'>HOME</Nav.Link>
                <Nav.Link href='/colaboracao' className='text-white'>COLABORAÇÃO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
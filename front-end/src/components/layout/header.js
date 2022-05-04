import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import Logo from '../../assets/img/toro_ideias_menu.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectUserIsLoggedIn } from '../../store/user/user.selectors'
import { useSelector } from 'react-redux'

export function Header() {
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn)
  return(
    <header>
      <NavbarStyled bg="light" expand="sm" className="mb-3">
          <Container>
            <Navbar.Brand as={Link} to='/'>
              <img src={Logo} alt='Logo Toró de Ideias' width={113} height={54} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-transparent border-none' />
            <Navbar.Offcanvas className='bg-main-color p-3' placement="end">
              <Offcanvas.Header closeButton className='btn-close-white'>
                <Offcanvas.Title className="font-pm font-24px">
                  Toró de Ideias!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/' className='text-white font-24px border-bottom border-white'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/colaboracao' className='text-white font-24px border-bottom border-white'>Colaboração</Nav.Link>
                  {userIsLoggedIn ? (
                    <Nav.Link as={Link} to='/dashboard' className='text-white font-24px border-bottom border-white'>Dashboard</Nav.Link>
                  ) : (
                    <Nav.Link as={Link} to='/login' className='text-white font-24px border-bottom border-white'>Login</Nav.Link>
                  )}
                  
                </Nav> 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Collapse id='basic-navbar-nav' className='d-none'>
               <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/' className='text-white'>Home</Nav.Link>
                <Nav.Link as={Link} to='/colaboracao' className='text-white'>Colaboração</Nav.Link>
                <Nav.Link as={Link} to='/login' className='text-white'>Login</Nav.Link>
              </Nav>
             </Navbar.Collapse>
          </Container>
        </NavbarStyled>
    </header>
  )
}



  //   return (
  //     <header>
  //       <NavbarStyled expand="sm">
  //         <Container>
  //           <Navbar.Brand as={Link} to='/'>
  //             <img src={Logo} alt='Logo Toró de Ideias' width={113} height={54} />
  //           </Navbar.Brand>
  //           <Navbar.Toggle aria-controls='basic-navbar-nav' />
  //           <Navbar.Collapse id='basic-navbar-nav'>
  //             <Nav className='ms-auto'>
  //               <Nav.Link as={Link} to='/' className='text-white'>HOME</Nav.Link>
  //               <Nav.Link as={Link} to='/colaboracao' className='text-white'>COLABORAÇÃO</Nav.Link>
  //               <Nav.Link as={Link} to='/login' className='text-white'>LOGIN</Nav.Link>
  //             </Nav>
  //           </Navbar.Collapse>
  //         </Container>
  //       </NavbarStyled>
  //     </header>
  //   )
  // }

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
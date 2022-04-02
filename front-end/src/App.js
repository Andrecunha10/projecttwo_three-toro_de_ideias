import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/toro_ideias_menu.svg'
import WhatsApp from './assets/img/whatsapp.svg'
import Linkdin from './assets/img/linked-in.svg'
import Facebook from './assets/img/facebook.svg'
import Instagram from './assets/img/instagram.svg'
import Lampada from './assets/img/logo_lampada.svg'
import Brain from './assets/img/brain.jpg'
import Attention from './assets/img/atencao.jpg'
import Group from './assets/img/grupo.jpg'
import Head from './assets/img/head.jpg'

function Header() {
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

function Footer() {
  return (
    <footer className='footer p-2 mt-4'>
      <Container>
        <div className='footer-container'>
          <p className='text-white m-0'>Página desenvolvida com o projeto de estudos.</p>
          <div>
            <a href="https://api.whatsapp.com/send?phone=5511971071655" target="_blank">
              <img src={WhatsApp} alt='Logo WhatsApp' width={30} height={30} />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9-cunha-a65351232/" target="_blank">
              <img src={Linkdin} alt='Logo Linked-in' width={30} height={30} />
            </a>
            <a href="https://www.facebook.com/andre.cunha.9277" target="_blank">
              <img src={Facebook} alt='Logo Facebook' width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/andrecunhareal/" target="_blank">
              <img src={Instagram} alt='Logo Instagram' width={30} height={30} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function MainHome(){
  return (
      <Container className='mt-4'>
        <section>
          <div className='text-center d-flex justify-content-center align-items-center flex-gap'>
            <img src={Lampada} alt='Logo em forma de lampada' width={60} height={63}/>
            <h1 className='font-pm fw-bold mb-0'>O que é Toró de Ideias?</h1>
          </div>
          <p className='font-ph font-20px mt-3'>Toró de ideías é uma plataforma de melhoria de produtos, serviços e processos através das sugestões dos nossos colaboradores e parceiros ao melhor estilo brainstorm. Criando, com isso, soluções inovadores que podem surgir de qualquer lugar, inclusive de pessoas que não estão ligadas diretamente ao departamento ou problema, trazendo novas ideias.</p>
        </section>
        <section className='d-md-flex align-items-center'>
        <img src={Brain} alt='Imagem de Celebro' width={397} height={329} className='img-fluid mx-auto d-block'/>
        <div>
          <h2 className='font-pm fw-bold'>E o que é Brainstorm?</h2>
          <p className='font-ph font-20px mt-3'>“Técnica de discussão em grupo que se vale da contribuição espontânea de ideias por parte de todos os participantes, no intuito de resolver algum problema ou de conceber um trabalho criativo.” - Saiba mais clicando aqui.</p>
          <div className='d-none d-lg-block'>
          <h2 className='font-pm fw-bold'>E por que ele é importante?</h2>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Attention} alt='Imagem Atenção' width={55} height={47}/>
            <p className='font-ph font-20px mt-3'>Traz atenção para o fato gerador do problema!</p>
          </div>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Group} alt='Imagem Grupo' width={55} height={50}/>
            <p className='font-ph font-20px'>Faz com que as idéias sejam vistas por diversos ângulos, facilitando a tomada de decisão.</p>
          </div>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Head} alt='Imagem Grupo' width={55} height={50}/>
            <p className='font-ph font-20px'>Auxilia na identificação das causas mais difíceis de solucionar, principalmente aquelas que não são visíveis.</p>
          </div>
          </div>
        </div>
        </section>
        <section className='d-lg-none'>
          <h2 className='font-pm fw-bold'>E por que ele é importante?</h2>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Attention} alt='Imagem Atenção' width={55} height={47}/>
            <p className='font-ph font-20px mt-3'>Traz atenção para o fato gerador do problema!</p>
          </div>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Group} alt='Imagem Grupo' width={55} height={50}/>
            <p className='font-ph font-20px'>Faz com que as idéias sejam vistas por diversos ângulos, facilitando a tomada de decisão.</p>
          </div>
          <div className='d-flex align-items-center flex-gap'>
            <img src={Head} alt='Imagem Grupo' width={55} height={50}/>
            <p className='font-ph font-20px'>Auxilia na identificação das causas mais difíceis de solucionar, principalmente aquelas que não são visíveis.</p>
          </div>
        </section>
        <section className='d-md-flex align-items-center mt-4 gap-4'>
        <div>
          <h2 className='font-pm fw-bold'>E como o Toró de Ideias funciona?</h2>
          <p className='font-ph font-20px mt-3 mb-0'>Na tela colaboração, serão apresentados problemas e oportunidades. Você colabora com a uma idéia para melhorar este problema. Simples assim.</p>
        </div>
        <div className='d-flex gap-5 justify-content-center'>
          <div className='post-it p-2 font-20px bg-color-green rotate-5 pi-size'>
          <p className='font-pm fw-bold text-center mb-1'>Problema 1</p>
          <p className='font-ph mb-0 line-height-1 line-height-15'>Sua ajuda é fundamental. E pode melhorar nossa empresa</p>
          </div>
          <div className='post-it p-2 font-20px bg-color-yellow rotate5 pi-size'>
          <p className='font-pm fw-bold text-center mb-1'>Problema 2</p>
          <p className='font-ph mb-0 line-height-1 line-height-15'>Sua ajuda é fundamental. E pode melhorar nossa empresa</p>
          </div>
        </div>
        </section>
        <section>
            <h2 className='font-pm fw-bold text-center mt-4'>Saiba mais sobre o brainstorm</h2>
            <iframe className="d-block mx-auto aling-center mt-4" width="560" height="315" src="https://www.youtube.com/embed/_M3thqTP0aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </section>
      </Container>
  )
}

function App() {
  return (
    <>
    <Header />
    <main>
      <MainHome />
    </main>
    <Footer />
    </>
  );
}

export default App;

import { Container } from 'react-bootstrap'
import Lampada from '../../assets/img/logo_lampada.svg'
import Brain from '../../assets/img/brain.jpg'
import Attention from '../../assets/img/atencao.jpg'
import Group from '../../assets/img/grupo.jpg'
import Head from '../../assets/img/head.jpg'

export function MainHome(){
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
            <p className='font-ph font-20px mt-3'>“Técnica de discussão em grupo que se vale da contribuição espontânea de ideias por parte de todos os participantes, no intuito de resolver algum problema ou de conceber um trabalho criativo.” - Saiba mais <a className='text-decoration-underline' href='#brainstorm'>clicando aqui.</a></p>
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
          <div className='flex-1'>
            <h2 className='font-pm fw-bold'>E como o Toró de Ideias funciona?</h2>
            <p className='font-ph font-20px mt-3 mb-4 mb-lg-0'>Na tela colaboração, serão apresentados problemas e oportunidades. Você colabora com a uma idéia para melhorar este problema. Simples assim.</p>
          </div>
          <div className='d-flex gap-5 justify-content-center flex-1'>
            <div className='post-it p-2 font-20px bg-color-green rotate-5 pi-size'>
            <p className='font-pm fw-bold text-center mb-1'>Problema 1</p>
            <p className='font-ph mb-0 line-height-1 line-height-15'>Sua ajuda é fundamental. E pode melhorar nossa empresa</p>
            </div>
            <div className='post-it p-2 font-20px bg-color-yellow rotate5 pi-size'>
            <p className='font-pm fw-bold text-center mb-1'>Problema 2</p>
            <p className='font-ph mb-0 line-height-1 line-height-15'>Colabore e transferme nossa organização</p>
            </div>
          </div>
          </section>
          <section>
              <h2 className='font-pm fw-bold text-center mt-4' id='brainstorm'>Saiba mais sobre o brainstorm</h2>
              <iframe className="d-block mx-auto aling-center mt-4" width="560" height="315" src="https://www.youtube.com/embed/_M3thqTP0aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
          </section>
        </Container>
    )
  }
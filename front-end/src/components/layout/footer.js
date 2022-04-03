import { Container } from "react-bootstrap";
import WhatsApp from '../../assets/img/whatsapp.svg'
import Linkdin from '../../assets/img/linked-in.svg'
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'

export function Footer() {
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
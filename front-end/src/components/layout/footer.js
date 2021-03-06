import { Container } from "react-bootstrap";
import WhatsApp from '../../assets/img/whatsapp.svg'
import Linkdin from '../../assets/img/linked-in.svg'
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import styled from "styled-components"

export function Footer() {
    return (
      <StyledFooter className='p-2 mt-4'>
        <Container>
          <StyledFooterContainer>
            <p className='text-white m-0'>Página desenvolvida com o projeto de estudos.</p>
            <div>
              <a href="https://api.whatsapp.com/send?phone=5511971071655" >
                <img src={WhatsApp} alt='Logo WhatsApp' width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/in/andr%C3%A9-cunha-a65351232/" >
                <img src={Linkdin} alt='Logo Linked-in' width={30} height={30} />
              </a>
              <a href="https://www.facebook.com/andre.cunha.9277" >
                <img src={Facebook} alt='Logo Facebook' width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/andrecunhareal/" >
                <img src={Instagram} alt='Logo Instagram' width={30} height={30} />
              </a>
            </div>
          </StyledFooterContainer>
        </Container>
      </StyledFooter>
    )
  }

  const StyledFooter = styled.footer`
    background: linear-gradient(94.37deg, rgba(43, 38, 38, 0.85) 0.43%, #2B2628 60%);
  `
  const StyledFooterContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column-reverse;
    align-items: center;
    min-width: 60px;
    @media (min-width: 576px) {
        flex-direction: row;
        justify-content: space-between;
      }
    & div {
      display: flex;
      gap: 10px; 
    }
  `
import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AlthLogin } from "../../components/authlogin"

export function LoginPage(){
    return(
        <StyledMain className="d-flex justify-content-center align-items-center p-3">
            <StyledContainer className="bg-white rounded p-3 p-md-5">
                <AlthLogin />
            </StyledContainer>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    background: linear-gradient(94.37deg, rgba(43, 38, 38, 0.74) 0.43%, #2B2628 50.47%);
`
const StyledContainer = styled(Container)`
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25); 
`


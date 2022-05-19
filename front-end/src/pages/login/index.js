import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AlthLogin } from "../../components/authlogin"
import { selectUserIsLoggedIn } from "../../store/user/user.selectors"


export function LoginPage(){
    const userIsLoggedIn = useSelector(selectUserIsLoggedIn)
    
    return(
        <StyledMain className="d-flex justify-content-center align-items-center p-3">
            <StyledContainer className="bg-white rounded p-3 p-md-5">
                {userIsLoggedIn ? (
                    <div className="font-ph font-20px">
                        <p className="font-pm h2">Você já está logado</p>
                        <p>Acesse a <Link to='/dashboard'>Dashboard</Link>.</p>
                        <p>Ou retorne a <Link to='/'>Home</Link>.</p>
                    </div>
                ) : (
                    <AlthLogin />
                )}         
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


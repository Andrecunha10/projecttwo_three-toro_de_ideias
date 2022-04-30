import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { CadForm } from "./cadform";
import { LoginForm } from "./loginform";

export function AlthLogin(){
    return(
        <Row>
            <Col xs={12} lg='auto' className="flex-fill">
                <LoginForm />
            </Col>
            <StyledCol className='font-pm text-center p-3 p-lg-5 align-self-center' xs={12} lg='auto' >
                Ou
            </StyledCol>
            <Col xs={12} lg='auto' className="flex-fill">
                <CadForm />
            </Col>
        </Row>
    )
}

const StyledCol = styled(Col)`
    :before, :after {
        content: '';
        width: 50px;
        height: 2px;
        background-color: var(--main-color);
        display: inline-block;
        vertical-align: middle;
        margin: 0 12px;
    }
    @media (min-width: 992px) {
        :before, :after {
      display: none;
        }
}
`
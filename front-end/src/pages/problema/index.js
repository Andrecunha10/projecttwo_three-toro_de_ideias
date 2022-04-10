import { Button, Container } from "react-bootstrap";
import { MainLayout } from "../../components/layout";

export function PageProblem(){
    return(
        <MainLayout>
            <Container>
            <h1 className='font-pm fw-bold text-center mt-4'>Problema 1</h1>
            <p className='font-ph font-20px mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.</p>
            <p className='font-ph font-20px'>Área de Atuação: Gestão de produtos</p>
            <h2 className='font-pm fw-bold'>Nossas Sugestões</h2>
            <div className="colaboration-css display-grid-problem justify-content-center mt-4 gap-4">
                <div className='post-it p-3 font-20px pi-problem-size'>
                    <p className='font-ph mb-1 line-height-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est.</p>
                    <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>André Cunha - RH</p>
                </div>
                <div className='post-it p-3 font-20px pi-problem-size'>
                    <p className='font-ph mb-1 line-height-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci.</p>
                    <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>Chico - Adm</p>
                </div>
                <div className='post-it p-3 font-20px pi-problem-size'>
                    <p className='font-ph mb-1 line-height-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex.</p>
                    <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>Maria Eduarda - RH</p>
                </div>  
                <div className='post-it p-3 font-20px pi-problem-size'>
                    <p className='font-ph mb-1 line-height-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>João - Mkt</p>
                </div>  
            </div>
            <h2 className='font-pm fw-bold mt-4'>Deixe a sua sugestão</h2>
                <div className='post-it p-3 font-20px bg-color-green pi-problem-size-form mt-4'>
                    <form action="" className="d-grid gap-3">
                        <textarea id="form-message" className="font-ph mb-1 line-height-1 form-postit form-postit-ta" name="message" placeholder="Sua Sugestão" maxLength="225" required></textarea>
                        <div className="d-flex gap-1 font-pm fw-bold text-center">
                            <input id="form-name" type="text" className="w-100 form-postit" placeholder="Seu Nome" required />
                            <input id="form-name" type="text" className="w-100 form-postit" placeholder="Dep." required />
                        </div>
                        <Button variant="dark">Sugerir</Button>
                    </form>
                </div>
            </Container>
        </MainLayout>
    )
}
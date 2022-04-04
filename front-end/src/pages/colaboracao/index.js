import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layout";


export function PageColaboracao() {
    return(
        <MainLayout>
            <h1 className='font-pm fw-bold mt-4 text-center'>Colaboração</h1>
            <div className='display-grid gap-4 gap-md-5 justify-content-center mt-5'>
                <Link className='text-decoration-none' to={'/problema'}>
                    <div className='post-it p-2 font-20px bg-color-green rotate-5 pi-size'>
                        <p className='font-pm fw-bold text-center mb-1'>Problema 1</p>
                        <p className='font-ph mb-0 line-height-1 line-height-15'>Sua ajuda é fundamental. E pode melhorar nossa empresa</p>
                    </div>
                </Link>
                <Link className='text-decoration-none' to={'/problema'}>
                    <div className='post-it p-2 font-20px bg-color-yellow rotate5 pi-size'>
                        <p className='font-pm fw-bold text-center mb-1'>Problema 2</p>
                        <p className='font-ph mb-0 line-height-1 line-height-15'>Colabore e transferme nossa organização</p>
                    </div>
                </Link>
                <Link className='text-decoration-none' to={'/problema'}>
                    <div className='post-it p-2 font-20px bg-color-pink rotate-5 pi-size'>
                        <p className='font-pm fw-bold text-center mb-1'>Problema 3</p>
                        <p className='font-ph mb-0 line-height-1 line-height-15'>Sua ajuda é fundamental. E pode melhorar nossa empresa</p>
                    </div>
                </Link>
                <Link className='text-decoration-none' to={'/problema'}>
                    <div className='post-it p-2 font-20px bg-color-blue rotate5 pi-size'>
                        <p className='font-pm fw-bold text-center mb-1'>Problema 4</p>
                        <p className='font-ph mb-0 line-height-1 line-height-15'>Colabore e transferme nossa organização</p>
                    </div>
                </Link>
            </div>
        </MainLayout>
    )
}
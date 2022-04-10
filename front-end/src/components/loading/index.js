import { Spinner } from "react-bootstrap";

export function Loading() {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Carregando...</span>
            </Spinner>
        </div>
    )
}
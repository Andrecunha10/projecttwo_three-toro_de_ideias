import { Alert } from "react-bootstrap";

export function PostItProblem({pb}){
    console.log(pb)
    return (
        <div>
            {pb.length > 0 ? (
                <>
                    {pb.map (problem => (
                        <div key={problem.id} className='post-it p-3 font-20px pi-problem-size'>
                            <p className='font-ph mb-1 line-height-1'>{problem.message}</p>
                            <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>{problem.name} - {problem.departament}</p>
                        </div>
                    ))}
                </>
            ) :( 
                <Alert variant="info" className="text-center my-4">Não foram localizados problemas</Alert>
            )}  
        </div>
    )
}
export function PostItProblem({pb}){
    return (
        <> 
            {pb.length > 0 ? (
                <div className="colaboration-css display-grid-problem justify-content-center mt-4 gap-4">
                    {pb.map (problem => (
                        <div key={problem.id} className='post-it p-3 font-20px pi-problem-size'>
                            <p className='font-ph mb-1 line-height-1'>{problem.message}</p>
                            <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>{problem.name} - {problem.departament}</p>
                        </div>
                    ))}
                </div> 
            ) : (
                <div className="display-grid-problem justify-content-center mt-4 gap-4">
                    <div className='post-it p-3 font-20px pi-problem-size bg-color-yellow rotate-5'>
                        <p className='font-ph mb-1 line-height-1'>Ainda não foram apresentadas sugestões.Colabore e transferme nossa organização. Sua ajuda é fundamental</p>
                        <p className='font-pm fw-bold text-center position-absolute bottom-0 end-0 pe-3'>Toró de Ideias!</p>
                    </div>
                </div> 
            )}   
        </>   
       
    )
}
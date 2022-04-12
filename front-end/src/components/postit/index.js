import { Link } from "react-router-dom";

export function PostItCol ({ problem }){
    return (
        <Link className='text-decoration-none post-it p-2 font-20px pi-size' to={`/problema/${problem.id}`}>
            <p className='font-pm fw-bold text-center line-height-1 line-height-15 mb-1'>{problem.name}</p>
            <p className='font-ph mb-0 line-height-1 line-height-15'>{problem.shortDescription}</p>
        </Link>
    )
}

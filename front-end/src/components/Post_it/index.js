import { Link } from "react-router-dom";

export function PostItCol ({ problem }){
    return (
        <Link className='text-decoration-none' to={`/problema${problem.id}`}>
                <div className={`post-it p-2 font-20px pi-size ${problem.color} ${problem.rotate}`}>
                    <p className='font-pm fw-bold text-center line-height-1 line-height-15 mb-1'>{problem.name}</p>
                    <p className='font-ph mb-0 line-height-1 line-height-15'>{problem.shortDescription}</p>
                </div>
        </Link>
    )
}

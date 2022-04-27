import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function SidebarItens ( {item}){
    const path = useResolvedPath(item.to)
    const match = useMatch({ path: path.pathname})
    return (
        <Nav.Item>
            <Nav.Link active={match} as={Link} to={item.to} className="text-white font-ph font-20px">{item.text}</Nav.Link>
        </Nav.Item>
    )
}
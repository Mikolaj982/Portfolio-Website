import { Link } from 'react-scroll';

export interface NavLinkProps {
    path: string,
    title: string,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    return (
        <Link to={path} smooth={true} duration={500} offset={-100}>
            {title}
        </Link>
    )
}

export default NavLink;
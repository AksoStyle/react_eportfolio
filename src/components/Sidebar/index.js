import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import './index.scss';
import LogoSubtitle from '../../assets/images/logo_sub_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faComputer, faLink} from '@fortawesome/free-solid-svg-icons'
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>  (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        
        <img className='sub-logo' src={LogoSubtitle} alt="farago_akos"/>
    </Link>
    <nav>
        <NavLink
            exact="true" 
            activeclassname="active" 
            to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink 
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
        <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link" 
            to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink
            exact="true" 
            activeclassname="active" 
            className="project-link"
            to="/projects">
            <FontAwesomeIcon icon={faComputer} color="#4d4d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/%C3%A1kos-farag%C3%B3-603202241/"
            >
                <FontAwesomeIcon icon={faLink} color='#30D5C8' />
            </a>
        </li>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AksoStyle"
            >
                <FontAwesomeIcon icon={faGitAlt} color='#30D5C8' />
            </a>
        </li>
        
    </ul>
</div>

)

export default Sidebar;
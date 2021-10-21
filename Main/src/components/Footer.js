import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { MdPhonelinkRing, MdEmail } from 'react-icons/md';


const Footer = () => {
    
    return (

           

        
        <ul className='footer'>
            <li>
                 <a href="https://github.com/ktmac21"><FaGithubAlt /></a></li>
            <li>
                <a href="tel:2676700941"><MdPhonelinkRing /></a></li>
            <li>
                <a href="https://www.linkedin.com/in/kate-eagles"><FaLinkedin /></a></li>
            <li>
                <a href="mailto:kteagles21@gmail.com"><MdEmail /></a></li>
        </ul>

    );
}

export default Footer